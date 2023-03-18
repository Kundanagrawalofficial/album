import React,{useEffect,useState} from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';

const CreateProduct = () => {
  const [categories,setCategories]=useState()
  //get all cat
  const getAllcategory =async()=>{
    try {
      
    } catch (error) {
      
    }
  }
  return (
    <Layout title={'Create Product'}>
      <div className='container-fluid m-3 p-3'>
        <div className='row'>
          <div className='col-md-3'>
            <AdminMenu />
          </div>
          <div className='col-md-9'>
            <h1>Create Product</h1>
            <p>Use this page to create a new product to sell in your store.</p>
            {/* Add form or input fields for creating a new product */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateProduct;
