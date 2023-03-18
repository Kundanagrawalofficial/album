import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';

const CreateCategory = () => {
  return (
    <Layout title={'Create Category'}>
      <div className='container-fluid m-3 p-3'>
        <div className='row'>
          <div className='col-md-3'>
            <AdminMenu />
          </div>
          <div className='col-md-9'>
            <h1>Create Category</h1>
            <p>Use this page to create a new category for your products.</p>
            {/* Add form or input fields for creating a new category */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateCategory;
