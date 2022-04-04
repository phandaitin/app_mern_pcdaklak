import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link,  useNavigate } from 'react-router-dom'
import { getAll } from '../../store/actions/CategoryAction'
import { addOnePost } from '../../store/actions/PostAction'
import { ADMIN_URI } from '../../store/constants/const'
import { categorySelector } from '../../store/reducers/CategoryReducer'

export default function PostAdd() {

  const navigate = useNavigate()
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
    navigate(`/${ADMIN_URI}/post`)
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

              <Button variant='primary' type="submit" disabled={!disableButton()}  > Submit </Button> {' '}

              <Button variant='success' to={`/${ADMIN_URI}/post`} as={Link} > Back </Button>
            </Col>
          </Form.Group>

        </Form>

      </Card.Body>

    </Card>
  )

  return (<>
  <div className="sb-nav-fixed">
      <div id="layoutSidenav">
        <div id="layoutSidenav_content">
          <div className="container-fluid px-2">            

            {renderPostAdd}

          </div>
        </div>
      </div>
    </div>
 
  </>)
}
