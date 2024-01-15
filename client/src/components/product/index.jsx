import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.scss'
import { Link } from 'react-router-dom'
import { useWishlist } from '../../context/wishlistContext'
function Products() {
////
const [wishlist, setwishlist,handlewish] = useWishlist()
////
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const axiosAll = async () => {
    const res = await axios.get('http://localhost:3000/')
    const data = res.data.data
    setIsLoading(false)
    setProduct(data)
  }
  useEffect(() => {
    axiosAll()
  }, [])

  return (
    <div className='container'>
      <div className="pro">
        { isLoading?<span className="loader"></span>:product && product.map((item) => (
          <ul key={item._id}>
            <li>{item.name}</li>
            <li>
              <div className="imgbox">

              <img src={item.src} alt="" />
              </div>
            </li>
            <li>{item.price}</li>
            <li><Link to={`/detail/${item._id}`}>
              <button>veiw</button>
            </Link>
              </li>
              <li>
                <button onClick={()=>handlewish(item)}>wish</button>
              </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Products