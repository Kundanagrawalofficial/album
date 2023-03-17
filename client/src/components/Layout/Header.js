import React from 'react'
import { NavLink, Link } from "react-router-dom"
import { useAuth } from '../../context/auth'
import toast from "react-hot-toast";

const Header = () => {
  const [auth, setAuth] = useAuth()

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ""
    })
    localStorage.removeItem('auth');
    toast.success('Logout Successfully')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to='/' className="navbar-brand" >🛒 Seller</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link active" aria-current="page" >Category</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {auth?.user?.name}
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink to="./dashboard" className="dropdown-item" >Dashboard</NavLink></li>
                  <li className="nav-item">
                    <NavLink onClick={handleLogout} to="/login" className="dropdown-item" >Logout</NavLink>
                  </li>
                </ul>
              </li>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                <div className="ms-3">
                  <li className="nav-item">
                    <NavLink to="/cart" className="nav-link" >Cart (0)</NavLink>
                  </li>
                </div>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
