import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    (async () => {
      try{
        setLoding(true)
        setError(false)
        const response = await axios.get('/api/products');
        console.log(response.data)
        setProducts(response.data)
        setLoding(false)  
      }
      catch(error){
        setError(true)
        setLoding(false)

      }
    })()

  }, [])

  if(error){
    return <h1>Something went wrong!</h1>
  }

  if(loading){
    return <h1>Loading...</h1>
  }


  return (
    <>
    <h1>Chai or API in react</h1>
    <h2>Number of products are: {products.length}</h2>
    </>
  )
}

export default App;