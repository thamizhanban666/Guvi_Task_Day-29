import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import myContext from './userContext';

function ViewUser() {
   let navigate = useNavigate()
   const userContext = useContext(myContext);
   let params = useParams();
  
   let index = userContext.users.findIndex((e)=> e.id == params.id)
   return (
      <div className='m-2'>
         <h1 className='text-secondary'>Details</h1><br/>
         <label className='h3 text-dark'>Name :</label> &emsp;
         <span className='h4 text-primary'>{userContext.users[index].name }</span><br/>
         <label className='h3 text-dark'>Position :</label> &emsp;
         <span className='h4 text-primary'>{userContext.users[index].position }</span><br/>
         <label className='h3 text-dark'>Office :</label> &emsp;
         <span className='h4 text-primary'>{userContext.users[index].office }</span><br/>
         <label className='h3 text-dark'>Age :</label> &emsp;
         <span className='h4 text-primary'>{userContext.users[index].age }</span><br/>
         <label className='h3 text-dark'>Start Date :</label> &emsp;
         <span className='h4 text-primary'>{userContext.users[index].startDate }</span><br/>
         <label className='h3 text-dark'>Salary :</label> &emsp;
         <span className='h4 text-primary'>{userContext.users[index].salary}</span><br /><br />
         <button className="d-none d-sm-inline-block btn btn-md btn-primary shadow-sm mt-2" onClick={()=>{navigate("/users")}}>Back</button>
      </div>
  )
}

export default ViewUser