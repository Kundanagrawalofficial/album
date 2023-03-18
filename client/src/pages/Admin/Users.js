import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';

const Users = () => {
  return (
    <Layout title={'All Users'}>
      <div className='container-fluid m-3 p-3'>
        <div className='row'>
          <div className='col-md-3'>
            <AdminMenu />
          </div>
          <div className='col-md-9'>
            <h1>All Users</h1>
            <p>View a list of all users in your system here.</p>
            {/* Add table or other display for showing list of users */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Users;
