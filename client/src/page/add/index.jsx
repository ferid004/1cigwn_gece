import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import * as Yup from 'yup';
import './index.scss';
import axios from 'axios';
function Add() {

  ///////// get
  const [product, setProduct] = useState([])
  const axiosAll = async () => {
    const res = await axios.get('http://localhost:3000/')
    const data = res.data.data
    setProduct(data)
  }
  useEffect(() => {
    axiosAll()
  }, [])
  /////
  const axiosPost = async (data) => {
    await axios.post('http://localhost:3000/', data)
    axiosAll()
  }
  const axiosDelete = async (id) => {
    await axios.delete(`http://localhost:3000/${id}`)
    axiosAll()
  }
  return (
    <div>
      <Helmet>
        <title>add</title>
      </Helmet>
      <div className="">
        <Formik
          initialValues={{ name: '', src: '', price: '' }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required('Required'),
            src: Yup.string()
              .required('Required'),
            price: Yup.number().required('Required'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            axiosPost(values)
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));

              setSubmitting(false);
              resetForm()
            }, 400);
          }}
        >
          <Form>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />

            <Field name="src" type="text" />
            <ErrorMessage name="src" />

            <Field name="price" type="text" />
            <ErrorMessage name="price" />

            <button type="submit">Submit</button>
          </Form>
        </Formik>

        <br />
        <br />
        <table border={1}>
          <thead>
            <tr>

              <th>name</th>
              <th>src</th>
              <th>price</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>

            {product && product.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>
                  <div className="imgbox">

                    <img src={item.src} alt="" />
                  </div>
                </td>
                <td>{item.price}</td>
                <td><button onClick={() => axiosDelete(item._id)}>delete</button></td>

              </tr>))}
         
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default Add