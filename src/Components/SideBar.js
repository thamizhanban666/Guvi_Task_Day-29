import React from 'react'
import { Link }  from "react-router-dom";

function SideBar() {
  return (
   //  <!-- Sidebar -->
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"/>

           
            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Addons
            </div>

            {/* <!-- Nav Item - Tables --> */}
            <li className="nav-item">
                <Link className="nav-link" to="/users">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Users</span></Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"/>

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

             {/* <!-- Sidebar Message --> */}
            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_rocket.svg" />
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="#">Upgrade to Pro!</a>
            </div>
        </ul>
      //   <!-- End of Sidebar --> 
  )
}

export default SideBar;