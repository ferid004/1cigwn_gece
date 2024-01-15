import React, { useEffect, useState } from 'react'

function useLocalStorage(strogename) {
    const [data, setData] = useState(localStorage.getItem(strogename)?JSON.parse(localStorage.getItem(strogename)):[])
    useEffect(() => {
      localStorage.setItem(strogename, JSON.stringify(data))
    }, [data])
    
  return [data,setData]
}

export default useLocalStorage