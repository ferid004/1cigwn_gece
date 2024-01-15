import React, { useEffect, useState } from 'react'
import './index.scss'
import { Helmet } from 'react-helmet-async'
import { useWishlist } from '../../context/wishlistContext'
function Wishlist() {
  const [wishlist, setwishlist,handlewish] = useWishlist()
  return (
    <div>
      
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      
      <div className="">
        {wishlist&& wishlist.map((item)=>(
          <ul key={item._id}>
            <li ><img src={item.src} alt="" /></li>
            <li><button onClick={()=>handlewish(item)}>delete</button></li>
          </ul>
        ))}
      </div>
      </div>
  )
}

export default Wishlist