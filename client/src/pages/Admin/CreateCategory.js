import React ,{useEffect,useState}from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import  toast from 'react-hot-toast';
import axios from "axios"
const CreateCategory = () => {
  const [categories,setCategories]=useState()
  //get all cat
  const getAllcategory =async()=>{
    try {
      const {data}= await axios.get('/api/v1/category/get-category')
      if(data.success){
        setCategories(data)
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went Wrong in getting category')
      
    }
  }
  return (
    <Layout title={"Dashboard - Create Category"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Category Now</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;