import React, { use } from 'react'
import { useUpdateProductMutation } from '../app/service/DummyData'

const UpdateProduct = ({productId}) => {
    const [updateProduct, {data, isLoading, isError}] = useUpdateProductMutation();




    if(isLoading)
        return <h1>Loading...</h1>
    
    if(isError)
        return <h1>Something went wrong</h1>

    const handleUpdateProduct = async () => {
        try{
            const updatedProductData = {
                title: "Title Updateddd....",
            };

            await updateProduct({
                id : productId,
                updatedProduct: updatedProductData
            });

        }catch(err){
            console.error("Error while Updating the Product", err)
        }

    }


    

  return (
    <div>
        <h1>{data?.title}</h1>

        <button onClick={handleUpdateProduct} disabled={isLoading}>Update Product</button>
    </div>
  )
}

export default UpdateProduct