import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    // Get All Products
    getAllProduct: builder.query({
      query: () => "/products",
    }),


    // Get a Specific Products
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),


    // Add a new Product
    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: `products/add`,
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: newProduct,
      }),
    }),

   
    //Update the Product
    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `products/${id}`,
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: updatedProduct,
      }),
    }),


    // Delete the product
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",      
      })
    })

  }),
});


export const {
  useGetAllProductQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,

} = productsApi;
