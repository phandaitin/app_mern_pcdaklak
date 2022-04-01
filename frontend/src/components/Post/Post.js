import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADMIN_URI } from '../../store/constants/const';


import PostItem from './PostItem';

import { addOnePost, changeStatusPost, deleteOnePost, getAllPost, getCheckedPost, getOnePost } from '../../store/actions/PostAction';
import { postSelector } from '../../store/reducers/PostReducer';
///import { authSelector  } from '../../store/reducers/AuthReducer';
import { getCurrentUser } from '../../store/actions/AuthAction';
import { authSelector } from '../../store/reducers/AuthReducer';

//============================================================
export default function Post() {

  const dispatch = useDispatch()
  const { posts }  = useSelector(postSelector) // hoặc const {posts} = useSelector( state => state.postReducer)
  const  {users }  = useSelector(authSelector)  
  //console.log(users)

  useEffect(() => {
    dispatch(getAllPost())
  }, [dispatch])

     useEffect(() => {
     dispatch(getCurrentUser())
   }, [dispatch])
  
 

  //================================================
  const [inputState, setInputState] = useState({ name: '' })
  const { name } = inputState

  const [openFormAdd, setOpenFormAdd] = useState(false)
  const [openFormEdit, setOpenFormEdit] = useState(false)

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
  let formAdd = (
    <Form className='mt-3 mx-3' onSubmit={onSubmitHandle}   >
      <Row>
        <Col md={2} className='text-center'>
          <Form.Label >
            {/* {alertMessage && <Alert variant='danger'> {alertMessage} </Alert>} */}
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Control type='text' placeholder='post name' name='name' autoFocus value={name} onChange={onChangeHandle} />
        </Col>

        <Col xs="4" className="my-0 text-center" >
          <Button type="submit" disabled={!validateForm()}   > Submit </Button>
          <Button className='mx-2' variant='danger' onClick={() => { setOpenFormAdd(false) }} >Cancle</Button>
        </Col>


      </Row>
    </Form>
  )
  let formEdit = (
    <Form className='mt-3 mx-3' onSubmit={onSubmitHandle}   >
      <Row>
        <Col md={2} className='text-center'>
          <Form.Label >
            {/* {alertMessage && <Alert variant='danger'> {alertMessage} </Alert>} */}
          </Form.Label>
        </Col>
        <Col md={6}>
          <Form.Control type='text' placeholder='post name edit' name='name' value={name} onChange={onChangeHandle} />
        </Col>

        <Col xs="4" className="my-0 text-center" >
          <Button type="submit" disabled={!validateForm()}   > Update </Button>
          <Button className='mx-2' variant='danger' onClick={() => { setOpenFormEdit(false) }} >Cancle</Button>
        </Col>


      </Row>
    </Form>
  )
  //========================================================
  let renderpost = (
    <Card className='mt-4'>
  
      <Card.Header className as='h4'> Posts List: <span style={{ color: 'red' }}> {posts.length} </span>
        {/* <Button style={{ float: 'right' }} size='md' type="submit" onClick={() => { setOpenFormAdd(true) }}  > Add New</Button> */}
      </Card.Header>          

      <Card.Body >
        
      <Link to={`/${ADMIN_URI}/postAdd`} as={Link} >
        <Button  className='mb-3' style={{ float: 'right' }} size='md' > Add New</Button>
      </Link>

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
                 
                  <PostItem post={post} index={index} users={users}/>
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
   {renderpost}
   </>)
}
