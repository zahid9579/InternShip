import React from 'react'
import AllProducts from './components/AllProducts';
import SpecificPorduct from './components/SpecificPorduct';
import AddNewProduct from './components/AddNewProduct';
import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/DeleteProduct';

const App = () => {
  return (
    <div>
      {/* <AllProducts/> */}
      {/* <SpecificPorduct/> */}
      {/* <AddNewProduct/> */}
      {/* <UpdateProduct productId = {4}/> */}
      <DeleteProduct productId={4}/>

    </div>
  )
}

export default App;