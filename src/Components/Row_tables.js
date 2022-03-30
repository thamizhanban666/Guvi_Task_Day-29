import axios from 'axios';
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'

function Row_tables(props) {

  let handleDelete = async (user) => {
    if (window.confirm(`Are you sure to delete the user ${user.name}?`)) {
      try {
        await axios.delete(`https://6212758cf43692c9c6eb7113.mockapi.io/day29-sb-admin/${user.id}`)
      } catch (error) {
        console.log(error);
      }
    }
    window.location.reload();
  }
  
  return (
      <tr>
        <td>{props.data.name}</td>
        <td>{props.data.position}</td>
        <td>{props.data.office}</td>
        <td>{props.data.age}</td>
        <td>{props.data.startDate.split("-").reverse().join("-")}</td>
        <td>{props.data.salary}</td>
        <td>
          <button className='btn-sm btn-outline-primary m-1 border border-3 border-primary rounded-pill shadow-sm'>View</button>
          <Link to={`/edit-user/${props.data.id}`} className='btn-sm btn-outline-warning m-1 border border-3 border-warning rounded-pill text-dark shadow-sm'>Edit</Link>
          <button className='btn-sm btn-outline-danger m-1 border border-3 border-danger rounded-pill shadow-sm' onClick={()=>handleDelete(props.data)}>Delete</button>
        </td>
      
      </tr>
  )
}

export default Row_tables