import axios from 'axios';
import { Link } from 'react-router-dom'
import React, { useContext, useEffect } from 'react'
import swal from 'sweetalert';
import myContext from './userContext';

function Row_tables(props) {
    const userContext = useContext(myContext);
  // To handle the delete button of the user
    let handleDelete = async (user) => {
      swal({
        title: `Are you sure to delete the user ${user.name}?`,
        text: "Once deleted, you will not be able to recover this user data",
        icon: "error",
        // buttons: true,
        buttons:{
          cancel: {
            text: "Cancel",
            value: null,
            visible: true,
            className: "btn btn-light text-primary",
            closeModal: true,
          },
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true
            
          }
        },
        dangerMode: true,
      })
        .then(async (willDelete) => {
          if (willDelete) {
            try {
              await axios.delete(`https://6212758cf43692c9c6eb7113.mockapi.io/day29-sb-admin/${user.id}`)
              let index = userContext.users.findIndex((obj) => obj.id == user.id);
              userContext.users.splice(index, 1);
              userContext.setUsers([...userContext.users]);
              swal(`User ${user.name} has been deleted!`, {
                icon: "success",
                buttons:{ confirm:{className:"btn btn-primary"}}
              }).then((ok) => {
              if (ok) {
                // window.location.reload();  
              }
            })
            } catch (error) {
              console.log(error);
              swal(`User ${user.name} has not been deleted due to some technical issues`,'Please try after some time', {
                icon: "info",
                buttons:{ confirm:{className:"btn btn-primary"}}
              }).then((ok) => {
                if (ok) {
                  // window.location.reload();  
                }
              });
            }
          }
        });
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