import React from 'react'
import { useGetAllProductQuery } from '../app/service/DummyData'


const AllProducts = () => {
    const {data, isError, isLoading} = useGetAllProductQuery()
    console.log(data);

    if(isError)
        return <h1>OOhNoo we got an error</h1>


    if(isLoading)
        return <h1>Loading....</h1>

  return (
    
    <div>
        {data?.products.map((p) =>(
            <>
            <h1 key={p.id}>{p.title}</h1>
            <p>{p.description}</p>
            </>
          

        ))}
    </div>
  )
}

export default AllProducts