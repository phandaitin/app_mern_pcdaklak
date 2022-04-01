
import { Link, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
//import { logout, userSelector } from '../../store/reducers/authSlice'
import Login from '../auth/Login'
import Register from '../auth/register'
//import { ADMIN_URI } from '../../constants/const'
//import Post from './Dashboard'
import { Table } from 'react-bootstrap'
import { getCurrentUser, logout } from '../../store/actions/AuthAction'
import { ADMIN_URI } from '../../store/constants/const'
import { authSelector } from '../../store/reducers/AuthReducer'
import { Fragment, useEffect } from 'react'
import PostItem from '../post/PostItem'
import Post from '../post/Post'
import Dashboard from '../dashboard/Dashboard'
import Contact from '../contact/Contact'
import Category from '../category/Category'

//import Post from '../Post/Post'


const DashboardHOC =(   ) => { 

  
    return ( <>
      {/* <Category />   */}
       {/* <Dashboard /> */}
      <Outlet/>
      </> )
      
      
      //<Outlet/>   
  }

  
//   const {Component,...restParam} = props;
 
//   return <Route {...restParam} render={(propsRoute)=>{
//       return <>
//           <Category />
//           <Component {...propsRoute} />
//       </>
//   }} />  
// }


export default   DashboardHOC

 

//   return (<>

//     {/* <Navigate to="/Home" /> */}
//     <Dashboard />
//     <Component />
//   </>)
// 
//}



  // body = (
  //   <>
  //     {authRoute === 'login' && <LoginForm />}
  //     {authRoute === 'register' && <RegisterForm />}
  //   </>
  // )

//   < Route
// exact
// path = '/login'
// render = { props => < Auth {...props } authRoute = 'login' />}
// />



//   < Route
// exact
// path = '/register'
// render = { props => < Auth {...props } authRoute = 'register' />}
// />
//   < ProtectedRoute exact path = '/dashboard' component = { Dashboard } />