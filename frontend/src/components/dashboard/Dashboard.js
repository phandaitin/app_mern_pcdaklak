
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
//import { logout, userSelector } from '../../store/reducers/authSlice'
import Login from '../auth/Login'
import Register from '../auth/register'
//import { ADMIN_URI } from '../../constants/const'

import { Button, Container, Dropdown, DropdownButton, Nav, Navbar, NavDropdown, Table } from 'react-bootstrap'
import { getCurrentUser, logout } from '../../store/actions/AuthAction'
import { ADMIN_URI } from '../../store/constants/const'
import { authSelector } from '../../store/reducers/AuthReducer'
import { useEffect } from 'react'
import Category from '../category/Category'
import Post from '../post/Post'

//import Post from '../Post/Post'
//  import abc from '../../assets/abc.svg'




export default function Dashboard({ propsRoute }) {  

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const { users } = useSelector(authSelector)
  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])


  const logOutHandle = () => {
    dispatch(logout())
    return navigate('/login')
  }


  if (localStorage.getItem('token') === null)  //if (!isAuthenticated)
    return (
      <Login />
    )
  //================================
  return (<>

    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">Admin Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">


            <NavDropdown title="Thanh tra pháp chế" id="collasible-nav-dropdown">
              <NavDropdown.Item to={`/${ADMIN_URI}/category`} as={Link}>Category</NavDropdown.Item>
              <NavDropdown.Item to={`/${ADMIN_URI}/post`} as={Link}>Post</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item to={`/${ADMIN_URI}/banner`} as={Link}>Banner</NavDropdown.Item>
              <NavDropdown.Item to={`/${ADMIN_URI}/slider`} as={Link}>Slider</NavDropdown.Item>
              <NavDropdown.Item to={`/${ADMIN_URI}/slogan`} as={Link}>Slogan</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#pricing">Điều độ</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link disabled ><span style={{ color: 'white' }} > Welcome: </span> {' '}<strong style={{ color: 'yellow' }}>{' '}{users}</strong>  </Nav.Link>
 
          </Nav>
          <Nav>

            <Button variant="danger"   to={`/${ADMIN_URI}/login`} as={Link} onClick={() => { logOutHandle() }}  >
              {/* <img src={abc} alt='logoutIcon' width='32' height='32' />{' '}               */}
              {' '}Logout
            </Button>
          </Nav>




        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>)
}

