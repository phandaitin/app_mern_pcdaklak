import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADMIN_URI } from '../../../store/constants/const';


import PostItem from './PostItem';

import { addOnePost,  getAllPost  } from '../../../store/actions/PostAction';
import { postSelector } from '../../../store/reducers/PostReducer';
import { getCurrentUser } from '../../../store/actions/AuthAction';
import { authSelector } from '../../../store/reducers/AuthReducer';

//============================================================
export default function Post() {

  const dispatch = useDispatch()
  const { posts } = useSelector(postSelector) // hoặc const {posts} = useSelector( state => state.postReducer)
  const { user } = useSelector(authSelector)
  // console.log('post',user)

  useEffect(() => {
    dispatch(getAllPost())
  }, [dispatch])

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])



  //================================================
  const [inputState, setInputState] = useState({ name: '' })
  const { name } = inputState
 

  const validateForm = () => {
    return (name.length > 0)
    //return true 
  }
  const onChangeHandle = (e) => {
    setInputState({ ...inputState, [e.target.name]: e.target.value })
  }
  const onSubmitHandle = (e) => {
    e.preventDefault()
    dispatch(addOnePost(inputState))
    setInputState({ name: '' })
  }




  //======================================================== 
  //========================================================
  let renderpost = (
    <Card className='mt-3'>
      <Card.Header className as='h4'> Posts List: <span style={{ color: 'red' }}> {posts.length} </span>
        {/* <Button style={{ float: 'right' }} size='md' type="submit" onClick={() => { setOpenFormAdd(true) }}  > Add New</Button> */}
        <Button style={{ float: 'right' }} size='md' to={`/${ADMIN_URI}/postAdd`} as={Link}   > Add New</Button>
      </Card.Header>

      <Card.Body >
        {/* <Link to={`/${ADMIN_URI}/postAdd`} as={Link} >
          <Button className='mb-3' style={{ float: 'right' }} size='md'    > Add New</Button>
        </Link> */}

        <Table striped bordered hover size="md">
          <thead>
            <tr className='text-center' style={{ background: '#3cc' }} >
              <th><Form.Check type='checkbox' />  </th>
              <th>#</th>
              <th>Catgory</th>
              <th>Name</th>
              <th>Status</th>
              <th>Author</th>
              <th>CreatedAt</th>
              <th className='text-center' >Action</th>
            </tr>
          </thead>

          <tbody>
            {
              //posts.slice(0,4).map((post, index) => (
              posts.map((post, index) => (
                <tr key={post._id} style={post.check ? { background: '#ccd' } : { background: '' }}>
                  <PostItem post={post} index={index} user={user} />
                </tr>
              ))
            }

          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )

  //========================================================
  return (<>

    <div className="sb-nav-fixed">
      <div id="layoutSidenav">
        <div id="layoutSidenav_content">
        <main>
          <div className="container-fluid px-2">
            {/* <h1 className="mt-4">Po</h1>
            <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item active">Dashboard</li>
            </ol> */}

            {renderpost}

          </div>
          </main>
        </div>
      </div>
    </div>

  </>)
}
