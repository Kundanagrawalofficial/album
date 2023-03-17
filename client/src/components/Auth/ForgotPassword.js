import React,{useState} from 'react'
import Layout from "../Layout/Layout"
import "./../../styles/AuthStyle.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import  toast from 'react-hot-toast'

const ForgotPassword = () => {
    const [email,setEmail]=useState("")
    const [newPassword,setNewPassword]=useState("")
    const [Question,setQuestion]=useState("")
    const navigate=useNavigate()
    //
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, { email, newPassword,Question });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
          navigate('/login');
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error('Something went Wrong');
      }
    };
    return(
    <Layout title={"Forgot Password - Album Seller"}><div className='form-container'>
    <h4>RESET PASSWORD </h4>
  <form onSubmit={handleSubmit}>

<div className="mb-3">

<input value={email}  onChange ={(e)=>setEmail(e.target.value)}type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email'required />
</div>
<div className="mb-3">

<input value={Question}  onChange ={(e)=>setQuestion(e.target.value)}type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Favourite Sport Name'required />
</div>
<div className="mb-3">

<input value={newPassword}  onChange ={(e)=>setNewPassword(e.target.value)}type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' required/>
</div>
<button type="submit" className="btn btn-primary">RESET</button>

</form>

   </div></Layout>
    )
}

export default ForgotPassword