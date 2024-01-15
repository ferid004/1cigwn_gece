import React, { useEffect, useState } from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Detail() {
  const [product, setProduct] = useState([])
  const { id } = useParams()
  const axiosAll = async () => {
    const res = await axios.get(`http://localhost:3000/${id}`)
    const data = res.data.data
    console.log(data);
    setProduct(data)
  }
  useEffect(() => {
    axiosAll()
  }, [])

  return (
    <div>
      <Helmet>
        <title>home</title>
      </Helmet>
      <div className=""> <img src={product.src} alt="" /></div>
    </div>
  )
}

export default Detail