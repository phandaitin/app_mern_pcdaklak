import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAll } from '../../store/actions/CategoryAction'
import { addOnePost } from '../../store/actions/PostAction'
import { ADMIN_URI } from '../../store/constants/const'
import { categorySelector } from '../../store/reducers/CategoryReducer'

export default function PostAdd() {

  const dispatch = useDispatch()
  const { categories } = useSelector(categorySelector) // hoặc const {categories} = useSelector( state => state.CategoryReducer)
  
  
  useEffect(() => {
    dispatch(getAll())
  }, [dispatch])



  //  const { createOne } = useContext(PostContext)
  //  const { categoryState: { categories } } = useContext(CategoryContext)



  const [newPost, setNewPost] = useState({ category: '', name: '', title: '', thumb: '', desc: '', content: '' })
  const { category, name, title, thumb, desc, content } = newPost

  //   const [alertMessage, setAlertMessage] = useState(null)
  //   let variant ='success'

  //====================================================================
  const resetForm = () => {
    setNewPost({ category: '', name: '', title: '', thumb: '', desc: '', content: '' })
  }

  function disableButton() {
    return (category.length > 0 && name.length > 0 && title.length > 0 && desc.length > 0 && content.length > 0)
  }

  const onChangeHandle = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value })
  }

  const onSubmitHandle = async (e) => {
    e.preventDefault()
    await dispatch(addOnePost(newPost))
    //==========================================
    // if (result.success) {
    //   setAlertMessage('Successfull...')       
    //   setTimeout(() => setAlertMessage(null), 1000)      
    // }else {
    //   variant ='danger'
    //   setAlertMessage(result.message)    //  result.message là kết quả trả ra từ coltroler của backend
    //   setTimeout(() => setAlertMessage(null), 5000) // an sau 5 giay
    // }
  }

  //====================================================================



  let renderPostAdd = (
    <Card className='mt-3'>
      <Card.Header className='h3'>Add Post
      </Card.Header>

      <Card.Body>

        {/* {alertMessage && <Alert variant={variant}> {alertMessage} </Alert>}           */}

        <Form onSubmit={onSubmitHandle}  >
          <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm="2">
              Category
            </Form.Label>
            <Col sm="10">
              <Form.Select
                name='category'
                value={category}
                onChange={onChangeHandle}
              >
                {/* render category fill in selectbox */}
                <option></option>
                {categories.map((abc) => (
                  <option key={abc._id} value={abc.name} > {abc.name} </option>
                ))}
                {/* render category fill in selectbox */}
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm="2">
              Post name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" size="lg" name='name' value={name} onChange={onChangeHandle} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3"  >
            <Form.Label column sm="2">
              Post title
            </Form.Label>
            <Col sm="10">
              <Form.Control as="textarea" rows={3} name='title' value={title} onChange={onChangeHandle} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3"  >
            <Form.Label column sm="2">
              Thumbnail
            </Form.Label>
            <Col sm="10">
              <Form.Control type="file" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm="2">
              Descript Thumb
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" size='sm' name='desc' value={desc} onChange={onChangeHandle} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" >
            <Form.Label column >
              Content
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" name='content' value={content} onChange={onChangeHandle} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='text-center'>
            <Col sm="2"></Col>

            <Col sm="10">
              <Button variant='danger' onClick={resetForm}> Cancle </Button> {' '}

              <Button variant='primary' type="submit" disabled={!disableButton()} to={`/${ADMIN_URI}/post`} > Submit </Button> {' '}

              <Button variant='success' to={`/${ADMIN_URI}/post`} as={Link} > Back </Button>
            </Col>
          </Form.Group>

        </Form>

      </Card.Body>

    </Card>
  )

  return (<>


    <div className="sb-nav-fixed">

      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        {/* Navbar Brand*/}
        <a className="navbar-brand ps-3" href="index.html">Admin Page</a>
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
              <li><Link className="dropdown-item" to={`/${ADMIN_URI}/register`} >Register</Link></li>
              <li><Link className="dropdown-item" to={`/${ADMIN_URI}/login`}  >Logout</Link></li>
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
                <a className="nav-link collapsed" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts4"
                  aria-expanded="false" aria-controls="collapseLayouts4">
                  <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
                  Thanh tra pháp chế
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                </a>
                <div className="collapse" id="collapseLayouts4" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                    <Link className="nav-link" to={`/${ADMIN_URI}/category`} > Category</Link>
                    <Link className="nav-link" to={`/${ADMIN_URI}/post`} > Post</Link>
                  </nav>
                </div>
                {/* Dieu do*/}


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
              <div className="small">Logged in as:{' '}</div>
              Start Bootstrap
            </div>
          </nav>
        </div>

        <div id="layoutSidenav_content">

          <div className="container-fluid px-4">
            <h1 className="mt-4">Dashboard</h1>
            <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>


                  {/* render Component here */}
                  {renderPostAdd}            
                  {/* render Component here */}


          </div>
        </div>
      </div>
    </div>
  </>)
}
