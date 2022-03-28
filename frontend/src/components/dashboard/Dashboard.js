
import { Link, Navigate, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { logout, userSelector } from '../../store/reducers/authSlice'
import Login from '../auth/Login'
import Register from '../auth/register'
import { ADMIN_URI } from '../../constants/const'
//import Post from '../Post/Post'
//import {ADMIN_URI}  from './constants/const';


export default function Dashboard() {

  const dispatch = useDispatch ()
  const navigate = useNavigate()
  const {users, isAuthenticated} = useSelector(userSelector)
  
  const logOutHandle =()=> { 
    dispatch( logout())
    return navigate('/login')
  }

  if (!isAuthenticated)
    return(    
      <Login />
    )
  else  
    return (<>
      <div className="sb-nav-fixed">

        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
          {/* Navbar Brand*/}
          <a className="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
          {/* Sidebar Toggle*/}
          <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars" /></button>
          {/* Navbar Search*/}
          <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
              <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
              <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search" /></button>
            </div>
          </form>
          {/* Navbar*/}
          <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#!">Settings</a></li>
                <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item"  to={`/${ADMIN_URI }/login`} onClick={ logOutHandle }>Logout</Link></li>
              </ul>
            </li>
          </ul>
        </nav>

        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
              <div className="sb-sidenav-menu">
                <div className="nav">
                  {/* Thanh tra phap che */}
                  <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts4" aria-expanded="false" aria-controls="collapseLayouts4">
                    <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
                    Thanh tra pháp chế
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </a>
                  <div className="collapse" id="collapseLayouts4" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                      <a className="nav-link" href="layout-static.html">Category</a>
                      <Link className="nav-link" to='/admin/post'> Post</Link>
                    </nav>
                  </div>
                  {/* Dieu do*/}
                  <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts3" aria-expanded="false" aria-controls="collapseLayouts3">
                    <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
                    Thanh tra pháp chế
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </a>
                  <div className="collapse" id="collapseLayouts3" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                      <a className="nav-link" href="layout-static.html">Category</a>
                      <Link className="nav-link" to='/admin/post'> Post</Link>
                    </nav>
                  </div>
                  {/* Ke hoach */}
                  <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts2" aria-expanded="false" aria-controls="collapseLayouts2">
                    <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
                    Thanh tra pháp chế
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </a>
                  <div className="collapse" id="collapseLayouts2" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                      <a className="nav-link" href="layout-static.html">Category</a>
                      <Link className="nav-link" to='/admin/post'> Post</Link>
                    </nav>
                  </div>
                  {/* CNTT  */}
                  <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts1" aria-expanded="false" aria-controls="collapseLayouts1">
                    <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
                    Thanh tra pháp chế
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </a>
                  <div className="collapse" id="collapseLayouts1" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav">
                      <a className="nav-link" href="layout-static.html">Category</a>
                      <Link className="nav-link" to='/admin/post'> Post</Link>
                    </nav>
                  </div>

                  <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                    <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
                    Pages
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </a>
                  <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                      <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                        Authentication
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                      </a>
                      <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                        <nav className="sb-sidenav-menu-nested nav">
                          <a className="nav-link" href="login.html">Login</a>
                          <a className="nav-link" href="register.html">Register</a>
                          <a className="nav-link" href="password.html">Forgot Password</a>
                        </nav>
                      </div>
                      <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                        Error
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                      </a>
                      <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                        <nav className="sb-sidenav-menu-nested nav">
                          <a className="nav-link" href="401.html">401 Page</a>
                          <a className="nav-link" href="404.html">404 Page</a>
                          <a className="nav-link" href="500.html">500 Page</a>
                        </nav>
                      </div>
                    </nav>
                  </div>
                  <div className="sb-sidenav-menu-heading">Addons</div>
                  <a className="nav-link" href="charts.html">
                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area" /></div>
                    Charts
                  </a>

                  <a className="nav-link" href='/admin/post' >
                    <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                    Tables
                  </a>
                </div>
              </div>
              <div className="sb-sidenav-footer">
                <div className="small">Logged in as:{' '}{users}</div>
                Start Bootstrap
              </div>
            </nav>
          </div>



          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid px-4">
                <h1 className="mt-4">Dashboard</h1>
                <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>

                {/* <Card /> */}
                {/* <Post /> */}

              </div>


            </main>
          </div>


        </div>

      </div>

  </>)
}

