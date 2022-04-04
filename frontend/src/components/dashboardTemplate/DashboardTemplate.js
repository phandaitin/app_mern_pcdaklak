import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { getCurrentUser, logout } from '../../store/actions/AuthAction'
import { ADMIN_URI } from '../../store/constants/const'
import { AuthReducer, authSelector } from '../../store/reducers/AuthReducer'

export default function DashboardTemplate() {

  
  const { user } = useSelector(authSelector)
  
  const dispatch = useDispatch()
 
 
  
  //=================================================================
  let renderHeader = (<>
    <div className="sb-nav-fixed">
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="index.html">Admin page</a>
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars" /></button>
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
            <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search" /></button>
          </div>
        </form>

        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="1#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw" /></a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#!">Settings</a></li>
              <li><a className="dropdown-item" href="#!">Activity Log</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#!">Logout</a></li>
            </ul>
          </li>
          <Button variant="danger"   to={`/${ADMIN_URI}/login`} as={Link} onClick={() => {  dispatch(logout())  }}  >

              {/* <img src={abc} alt='logoutIcon' width='32' height='32' />{' '}               */}
              {' '}Logout
            </Button>
        </ul>
      </nav>
    </div>
  </>)

  let renderSlidenav = (<>
    <div className="sb-nav-fixed">
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">

              <div className="nav">


                <a className="nav-link collapsed" href="1#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-book-open" />
                  </div>
                  Thanh tra pháp chế
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                </a>
                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to={`/${ADMIN_URI}/category`} >Categories </Link>
                    <Link className="nav-link" to={`/${ADMIN_URI}/post`} >Posts </Link>

                  </nav>
                </div>
                <a className="nav-link collapsed" href="1#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                  <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
                  Pages
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                </a>
                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                    <a className="nav-link collapsed" href="1#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
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
                    <a className="nav-link collapsed" href="1#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
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

              </div>

            </div>
            <div className="sb-sidenav-footer">
              <div className="text-center"> Welcome: {''}  <strong style ={{color: 'yellow' }} > {user}  </strong></div>
              
            </div>
          </nav>
        </div>
      </div>
    </div>
  </>)

  return (<>

    {renderHeader}
    {renderSlidenav}

    <Outlet />

  </>)
}