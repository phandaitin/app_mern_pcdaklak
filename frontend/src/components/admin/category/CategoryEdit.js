import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getOne } from '../../store/actions/CategoryAction'
import {  categorySelector } from '../../store/reducers/CategoryReducer'

export default function CategoryEdit() {

  const { category } = useSelector(categorySelector)
  //const { name  } = category 

  // console.log('category', category)
  // console.log('category[0]', category[0])

  const [input, setInput] = useState(  category  )
  useEffect(() =>   setInput(category[0]), [category] )
  const { name,  status  } =input 

  // console.log('input', input)
  // console.log('category  Object.assign({}', Object.assign({} , category))
  // console.log('category',  category)
  
  
  



  // State
	// const [updatedPost, setUpdatedPost] = useState(post)
	// useEffect(() => setUpdatedPost(post), [post])
	// const { title, description, url, status } = updatedPost
 

  // const [editPost, setEditPost] = useState({ posts111 })
  // const { category, name, title, thumb, desc, content } = editPost

  const onChangeHandle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }


  return (<>
    
    <Form.Group as={Row} className="mb-3" >
      <Form.Label column sm="2">
        Post name
      </Form.Label>
        <h1> abc </h1>

      <Col sm="5">
        <Form.Control type="text" size="lg" 
          name='name'
          value= { name ||''     } 
          onChange={onChangeHandle}
        />
      </Col>
      <Col sm="5">
        <Form.Control type="text" size="lg" 
          name='status'
          value={  status ||''   } 
 
          onChange={onChangeHandle}
        />
      </Col>
 
    </Form.Group>


  </>)
}
