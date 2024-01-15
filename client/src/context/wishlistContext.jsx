import { createContext, useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";
import { useContext } from "react";


const wishlistContext = createContext()

export const WishlistProvider=({ children })=> { 
    const [wishlist, setWishlist] = useLocalStorage('wish')

function handlewish(item) {
    const index= wishlist.findIndex(x=>x._id===item._id)
    if (index===-1) {
        setWishlist([...wishlist,item])
        return
    }
    setWishlist(wishlist.filter(x=>x._id!==item._id))
}

    const data=[
        wishlist,
        setWishlist,
        handlewish,
    ]
    return (
        <wishlistContext.Provider value={data}>
            {children}
        </wishlistContext.Provider>
    )
}
export const useWishlist=()=>useContext(wishlistContext)