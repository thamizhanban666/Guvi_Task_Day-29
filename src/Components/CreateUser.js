import React, { useContext, useEffect } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import swal from 'sweetalert'
import myContext from './userContext';
import { Link, useNavigate } from 'react-router-dom';
function CreateUser() { 
     let navigate = useNavigate()
     const userContext = useContext(myContext);
     const formik = useFormik({
          initialValues: {
               name: "",
               position: "",
               office: "",
               age: "",
               startDate: "",
               salary:"",
          },
          validate: (values) => {
               const errors = {};
               
               if (!values.name) {
                    errors.name="Name cannot be blank"
               }
               if (!values.position) {
                    errors.position="Position cannot be blank"
               }
               if (!values.office) {
                    errors.office="Office cannot be blank"
               }
               if (!values.age  || values.age<=18) {
                    errors.age="Age should be greater than 18"
               }
               if (!values.startDate) {
                    errors.startDate="Start date cannot be blank"
               }
               if (!values.salary || values.salary==0) {
                    errors.salary="Enter any value"
               }
               
               return errors;
          },
          onSubmit: async (values) => {               
               try {
                    await axios.post("https://6212758cf43692c9c6eb7113.mockapi.io/day29-sb-admin", values);
                    userContext.setUsers([...userContext.users, values]);
                    formik.resetForm();
                    navigate("/users")
                    swal({
                         title: `User - ${values.name}`,
                         text: "Succefully Created",
                         icon: "success",
                         button: true,
                    })
               } catch (error) {
                    console.log(error);
                    navigate("/users");
                    swal(`This user was not created due to some technical issues`,'Please try after some time', {
                         icon: "info",
                    })
               }
          }
     })
  return (
   <div className='container'>
     <span className=''>Create User</span>
     <fieldset className='border border-5 border-primary p-3'>
          <form onSubmit={formik.handleSubmit} id="form">
          <div className='row'>
               <div className='col-5 m-3 mx-auto'>
                    <label className='text-dark'>Name</label><span className='text-danger'>*</span>
                    <input className={`form-control border border-${formik.errors.name?"danger":"success"}`} name="name" onChange={formik.handleChange} value={formik.values.name}></input>
                    <span className='text-danger'>{formik.errors.name}</span>            
               </div>
               <div className='col-5 m-3 mx-auto'>
                    <label className='text-dark'>Position</label><span className='text-danger'> *</span>
                    <input className={`form-control border border-${formik.errors.position?"danger":"success"}`} name="position" onChange={formik.handleChange} value={formik.values.position}></input>
                    <span className='text-danger'>{formik.errors.position}</span>            
               </div>
               <div className='col-5 m-3 mx-auto'>
                    <label className='text-dark'>Office</label><span className='text-danger'> *</span>
                    <input className={`form-control border border-${formik.errors.office?"danger":"success"}`} name="office"  onChange={formik.handleChange} value={formik.values.office}></input>
                    <span className='text-danger'>{formik.errors.office}</span>            
               </div>
               <div className='col-5 m-3 mx-auto'>
                    <label className='text-dark'>Age</label><span className='text-danger'> *</span>
                    <input type="number" className={`form-control border border-${formik.errors.age?"danger":"success"}`} name="age" onChange={formik.handleChange} value={formik.values.age}></input>
                    <span className='text-danger'>{formik.errors.age}</span>            
               </div>
               <div className='col-5 m-3 mx-auto'>
                    <label className='text-dark'>Start date</label><span className='text-danger'> *</span>
                    <input type="date" className={`form-control border border-${formik.errors.startDate?"danger":"success"}`} name="startDate"  onChange={formik.handleChange} value={formik.values.startDate}></input>
                    <span className='text-danger'>{formik.errors.startDate}</span>            
               </div>
               <div className='col-5 m-3 mx-auto'>
                    <label className='text-dark fw-bold'>Salary (in $)</label><span className='text-danger'> *</span>
                    <input  type="number" className={`form-control border border-${formik.errors.salary?"danger":"success"}`} name="salary"  onChange={formik.handleChange} value={formik.values.salary}></input>
                    <span className='text-danger'>{formik.errors.salary}</span>            
               </div>
          </div>
          <div className='m-3 text-center'>
               <button type='submit' className="d-none d-sm-inline-block btn btn-lg btn-success shadow-sm" disabled={Object.keys(formik.errors).length>0? true:false} >Submit</button>
          </div>
          </form>
            </fieldset>
            <button className="d-none d-sm-inline-block btn btn-md btn-primary shadow-sm mt-2" onClick={()=>{navigate("/users")}}>Back</button>
   </div>
  )
}

export default CreateUser