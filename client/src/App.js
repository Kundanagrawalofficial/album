import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage.js";
import About from './pages/About.js';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from "./components/Auth/Register.js";
import Login from "./components/Auth/Login.js";
import Dashboard from "./pages/user/Dashboard.js";
import PrivateRoute from "./components/Routes/Private.js";
import ForgotPassword from './components/Auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashBoard from './pages/Admin/AdminDashBoard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Users from './pages/Admin/Users';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';

function App() {
  return (
    < >
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/dashboard" element={<PrivateRoute/>}>
      <Route path="user"element={<Dashboard/>}/>
      <Route path="user/orders"element={<Orders/>}/>
      <Route path="user/profile"element={<Profile/>}/>
    </Route  >
    <Route path="/dashboard" element={<AdminRoute/>}>
      <Route path="admin"element={<AdminDashBoard/>}/>
      <Route path="admin/create-category"element={<CreateCategory/>}/>
      <Route path="admin/create-product"element={<CreateProduct/>}/>
      <Route path="admin/users"element={<Users/>}/>
    </Route  >
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/forgot-password" element={<ForgotPassword/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/policy" element={<Policy/>}/>
    <Route path="*" element={<Pagenotfound/>}/>
    </Routes>
      
    </>
  );
}

export default App;
