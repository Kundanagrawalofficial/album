import React from 'react';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';

const Orders = () => {
  return (
    <Layout title={"Your Orders"}>
      <div className='container-fluid p-3 m-3'>
        <div className='row'>
          <div className='col-md-3'>
            <UserMenu/>
          </div>
          <div className='col-md-9'>
            <h1>Order History</h1>
            <p>View your past orders and track their status below.</p>
            {/* Add filters or sorting options here */}
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Order #1234</h5>
                <p className='card-text'>Status: Completed</p>
                {/* Add more order details here */}
              </div>
            </div>
            {/* Repeat the card for each order */}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Orders;
