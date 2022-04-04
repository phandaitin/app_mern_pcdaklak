import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getAll } from '../../store/actions/CategoryAction'
import { updateOnePost } from '../../store/actions/PostAction'
import { ADMIN_URI } from '../../store/constants/const'
import { categorySelector } from '../../store/reducers/CategoryReducer'
import { postSelector } from '../../store/reducers/PostReducer'

export default function PostEdit() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { categories } = useSelector(categorySelector)
  const { post } = useSelector(postSelector)

  const [editPost, setEditPost] = useState(post)
  useEffect(() =>
    setEditPost(post), [post]
  )

  useEffect(() => {
    dispatch(getAll())
  }, [dispatch])

  const { category, name, title, thumb, desc, content } = editPost

  //====================================================================
  const resetForm = () => {
    setEditPost({ category: '', name: '', title: '', thumb: '', desc: '', content: '' })

  }

  function disableButton() {
    // return (category.length > 0 && name.length > 0 && title.length > 0 && desc.length > 0 && content.length > 0)
    return true
  }

  const onChangeHandle = (e) => {
    setEditPost({ ...editPost, [e.target.name]: e.target.value })
  }

  const onSubmitHandle = async (e) => {
    e.preventDefault()
    await dispatch(updateOnePost(editPost))
    navigate(`/${ADMIN_URI}/post`)
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
                name='name'
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
              <Form.Control type="text" size="lg"
                name='name'
                value={name || ''}
                onChange={onChangeHandle}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3"  >
            <Form.Label column sm="2">
              Post title
            </Form.Label>
            <Col sm="10">
              <Form.Control as="textarea" rows={3}
                name='title'
                value={title || ''}
                onChange={onChangeHandle}
              />
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
              <Form.Control type="text" size='sm'
                name='desc'
                value={desc || ''}
                onChange={onChangeHandle}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" >
            <Form.Label column >
              Content
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text"
                name='content'
                value={content || ''}
                onChange={onChangeHandle}
              />
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
      <div id="layoutSidenav">
        <div id="layoutSidenav_content">
          <div className="container-fluid px-2">            

            {renderPostEdit}

          </div>
        </div>
      </div>
    </div>

  </>)
}
