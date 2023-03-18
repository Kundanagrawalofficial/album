import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Menu.css"
const AdminMenu = () => {
  return (
    <>
      <div className='text-center'>
        <div className="list-group">
          <h4>Admin Panel</h4>
          <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">
            <i className="bi bi-plus"></i> Add New Category
          </NavLink>
          <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">
            <i className="bi bi-plus"></i> Add New Product
          </NavLink>
          <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">
            <i className="bi bi-person"></i> Users
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default AdminMenu
