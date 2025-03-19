import React from 'react'
import { useGetProductByIdQuery } from '../app/service/DummyData';

const SpecificPorduct = () => {
    const {data, isError, isLoading} = useGetProductByIdQuery(5)


    if(isLoading){
        return <h1>Loading...</h1>

    }

    if(isError){
        return <h1>Something went wrong!</h1>
    }
  return (
    <div>
        <h1>{data.brand}</h1>
        <h1>{data.category}</h1>
        <p>{data.description}</p>
    </div>
  )
}

export default SpecificPorduct;