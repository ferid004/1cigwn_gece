import React from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import Products from '../../components/product'
function Home() {
  return (
    <div>
      <Helmet>
        <title>home</title>
      </Helmet>
      Home
      <Products></Products>
      </div>
  )
}

export default Home