import React ,{useState}from 'react'
import Layout from "./../../components/Layout/Layout"
import "./../../styles/AuthStyle.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import  toast from 'react-hot-toast';
const Register = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const[Question,setQuestion]=useState("")
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
     e.preventDefault()
    try {
        const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address,Question})
        if(res && res.data.success){
        toast.success(res.data && res.data.message)
        navigate('/login')
        }else{
            toast.error(res.data.message)
        }
    }
     catch (error) {
        console.log(error)
        toast.error("Something went Wrong")
        
        
    }
    }

  return (
    <Layout title="Register -Album seller"><div className='form-container'>
         <h1>Register Page </h1>
       <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <input type="text" 
    value={name} onChange ={(e)=>setName(e.target.value)}className="form-control" id="exampleInputEmail1" placeholder='Enter Your Name' required/>
  </div>
  <div className="mb-3">
   
    <input value={email}  onChange ={(e)=>setEmail(e.target.value)}type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email'required />
  </div>
  <div className="mb-3">
  
    <input value={password}  onChange ={(e)=>setPassword(e.target.value)}type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' required/>
  </div>
  <div className="mb-3">
   
    <input value ={phone }  onChange ={(e)=>setPhone(e.target.value)}type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Phone' required/>
  </div>
  <div className="mb-3">
    
    <input value={address}  onChange ={(e)=>setAddress(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Address' required/>
  </div>
  <div className="mb-3">
    
    <input value={Question}  onChange ={(e)=>setQuestion(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Favorite Sports' required/>
  </div>
  <button type="submit" className="btn btn-primary">REGISTER</button>
</form>

        </div>
       </Layout>
  )
}

export default Register