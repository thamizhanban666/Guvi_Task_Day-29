import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Row_tables from './Row_tables'
import axios from 'axios'
function Tables() {
    const [users, setUsers] = useState([]);
  useEffect(async()=>{
    try {
        let datas = await axios.get("https://6212758cf43692c9c6eb7113.mockapi.io/day29-sb-admin")
        setUsers(datas.data)
    } catch (error) {
        console.log(error);
    }
  
  },[])
  return (
   <>
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-2 text-gray-800">Users</h1>
        
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
            <div className="card-header py-3 d-sm-flex align-items-center justify-content-between mb-4">
                  <h6 className="m-0 font-weight-bold text-primary">List of Users</h6>
                   <Link to="/create-user" className="d-none d-sm-inline-block btn btn-md btn-success shadow-sm">Create User</Link>
            </div>
            <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary (in $)</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary (in $)</th>
                                <th>Actions</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                                users.map((obj) => {
                                    return <Row_tables data={obj}/>
                                })     
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </>
  )
}

export default Tables