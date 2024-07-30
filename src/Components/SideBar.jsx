import React from 'react'

import {Link} from 'react-router-dom'

function SideBar() {
  return <>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand -->/ */}
<Link to='/' className="sidebar-brand d-flex align-items-center justify-content-center" >
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</Link>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<li className="nav-item active">
    <Link to='/' className="nav-link" >
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></Link>
</li>

{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

{/* <!-- Heading --> */}
<div className="sidebar-heading">
    Interface
</div>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item">
    <Link to='/add-user' className="nav-link collapsed">
        <i className="fas fa-fw fa-cog"></i>
        <span>Add User</span>
    </Link>
</li>

{/* <!-- Nav Item - Utilities Collapse Menu --> */}
<li className="nav-item">
    <Link to='/profile' className="nav-link collapsed">
        <i className="fas fa-fw fa-wrench"></i>
        <span>Profile</span>
    </Link>
</li>
<li className="nav-item">
    <Link to='/use-ref' className="nav-link collapsed">
        <i className="fas fa-fw fa-wrench"></i>
        <span>Use Ref</span>
    </Link>
</li>
<li className="nav-item">
    <Link to='/reduser' className="nav-link collapsed">
        <i className="fas fa-fw fa-wrench"></i>
        <span>Reduser</span>
    </Link>
</li>


{/* <!-- Divider --> */}
<hr className="sidebar-divider"/>

</ul>
  </>
}

export default SideBar
