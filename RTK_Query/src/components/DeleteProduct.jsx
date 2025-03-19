import React from 'react'
import { useDeleteProductMutation } from '../app/service/DummyData';

const DeleteProduct = ({productId}) => {
    const [deleteProduct, {data, isLoading, isError}] = useDeleteProductMutation();

    

    if(isError)
        return <h1> Something went wrong</h1>


    if(isLoading)
        return <h1>Loading...</h1>

    const handleDeleteProduct = async () => {
        try{
            await deleteProduct(productId);

        }catch(err){
            console.error("Error while deleting the product", err)
        }

    }


  return (
    <div>
        <h1>{data?.title ? `${data.title} Successfully deleted` : ""}</h1>
        <button onClick={handleDeleteProduct} disabled={isLoading}>Delete Product</button>
    </div>
  )
}

export default DeleteProduct;