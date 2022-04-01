import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAll } from '../../store/actions/CategoryAction'
import { addOnePost, getOnePost } from '../../store/actions/PostAction'
import { ADMIN_URI } from '../../store/constants/const'
import { categorySelector } from '../../store/reducers/CategoryReducer'
import { postSelector } from '../../store/reducers/PostReducer'

export default function PostEdit() {

  const dispatch = useDispatch()
  const { categories } = useSelector(categorySelector) // hoặc const {categories} = useSelector( state => state.CategoryReducer)
  const { posts }  = useSelector(postSelector) 
  console.log('posts',posts.name)

  // useEffect(() => {
  //   dispatch(getOAll())
  // }, [dispatch])



  //  const { createOne } = useContext(PostContext)
  //  const { categoryState: { categories } } = useContext(CategoryContext)



  const [editPost, setEditPost] = useState({ category: '', name: '', title: '', thumb: '', desc: '', content: '' })
  const { category, name, title, thumb, desc, content } = editPost

  //   const [alertMessage, setAlertMessage] = useState(null)
  //   let variant ='success'

  //====================================================================
  const resetForm = () => {
    setEditPost({ category: '', name: '', title: '', thumb: '', desc: '', content: '' })
  }

  function disableButton() {
    return (category.length > 0 && name.length > 0 && title.length > 0 && desc.length > 0 && content.length > 0)
  }

  const onChangeHandle = (e) => {
    setEditPost({ ...editPost, [e.target.name]: e.target.value })
  }

  const onSubmitHandle = async (e) => {
    e.preventDefault()
    await dispatch(getOnePost(editPost))
    
  }

  //====================================================================



  let renderPostEdit = (
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
              <Form.Control type="text" size="lg" name='name' value={posts.name} onChange={onChangeHandle} />
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
    {renderPostEdit}
  </>)
}
