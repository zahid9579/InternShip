import React from 'react'
import { useAddNewProductMutation } from '../app/service/DummyData';

const AddNewProduct = () => {
    const [addNewProduct, {data, isError, isLoading}] = useAddNewProductMutation();


    if(isError)
        return <h1> Something went wrong!</h1>
    
    if(isLoading)
        return <h1>Loading...</h1>
    

    const handleAddProduct = async () => {
        try{
            const newProductData = {
                id: 1,
                title: "Amazing T-shirt",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, non!"
            };
            await addNewProduct(newProductData)

        }catch(err){
            console.error("Error while adding new product", err)
        }

    }

  return (
    <div>
        <h1>{data?.id}</h1>
        <h1>{data?.title}</h1>
        <h1>{data?.description}</h1>

        <button onClick={handleAddProduct} disabled = {isLoading}>Add New Product </button>
    </div>
  )
}

export default AddNewProduct;