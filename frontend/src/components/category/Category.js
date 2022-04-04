import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADMIN_URI } from '../../store/constants/const';


import { addOne, changeStatus, deleteOne, getAll, getChecked, getOne } from '../../store/actions/CategoryAction';
import { categorySelector } from '../../store/reducers/CategoryReducer';

//============================================================
export default function Category() {

  const dispatch = useDispatch()
  const {  categories   } = useSelector(categorySelector) // hoặc const {categories} = useSelector( state => state.CategoryReducer)

  useEffect(() => {
    dispatch(getAll())
  }, [dispatch])

 
  // useEffect(() => {
  //   dispatch(getOne('6243eeebfbb65c94328d68e1'))
  // }, [dispatch])
  // // console.log( 'categories  ', categories  )
  //================================================
  const [inputState, setInputState] = useState( { name:'' })
    const { name } = inputState
    //console.log('category',   category  )

  // const [editState, setEditState] = useState( { category})
  // const { nameEdit } = editState
  // //console.log('name1',   category ) 
  // console.log('name1',   categories )

  // const [inputState1, setInputState1] = useState({ category  })
  // const  name1  = inputState1.name
  // console.log('name1', name1)
  //const [inputState1, setInputState1] = useState({   category   })   const { name1 } = inputState1
  //console.log( 'category>>> ', inputState1  )
  ////const { name1 } = inputState1
  

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
    dispatch(addOne(inputState))
    setInputState({ name: '' })
  }
  const deleteHandle = (Id) => {
    dispatch(deleteOne(Id))
  }
  const getOneHandle = (Id) => {
    dispatch(getOne(Id))               
    //setInputState({ categories})
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
          <Form.Control type='text' placeholder='Category name' name='name' autoFocus value={name} onChange={onChangeHandle} />
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
          <Form.Control type='text' placeholder='Category name edit' name='name'  value={ name}  onChange={onChangeHandle} />
        </Col>

        <Col xs="4" className="my-0 text-center" >
          <Button type="submit" disabled={!validateForm()}   > Update </Button>
          <Button className='mx-2' variant='danger' onClick={() => { setOpenFormEdit(false) }} >Cancle</Button>
        </Col>


      </Row>
    </Form>
  )
  //========================================================
  let renderCategory = (
    <Card className='mt-4'>
      <Card.Header className as='h3'> Categories List: <span style={{ color: 'red' }}> {categories.length} </span>
        <Button style={{ float: 'right' }} size='md' type="submit" onClick={() => { setOpenFormAdd(true) }}  > Add New</Button>
      </Card.Header>

      {openFormAdd && formAdd}
      {openFormEdit && formEdit}

      <Card.Body>
        <Table striped bordered hover size="md">
          <thead>
            <tr className='text-center' style={{ background: '#3cc' }} >
              <th><Form.Check type='checkbox' />  </th>
              <th>#</th>
              <th>Name</th>
              <th>Slug</th>
              <th>Status</th>
              <th className='text-center' >Action</th>
            </tr>
          </thead>

          <tbody>
            {
              //categories.slice(0,4).map((category, index) => (
              categories.map((category, index) => (
                <tr key={category._id} style={category.check ? { background: '#ccd' } : { background: '' }}>

                  {/* <CategoryItem category={category} index={index} /> */}
                  <td className='text-center'>
                    <Form.Check type='checkbox' name='check'
                      //style={category.check ? { background: '#ccd' } : { background: '' }}
                      onChange={() => { dispatch(getChecked(category._id)) }}
                    />
                  </td>
                  <td className='text-center'>{index + 1}</td>
                  <td>{category.name}</td>
                  <td>{category.slug}</td>
                  <td className='text-center' >
                    <Button size='sm' variant={category.status === 'active' ? 'success' : 'warning'}
                      onClick={() => dispatch(changeStatus(category._id, category.status))}
                    >
                      {category.status}
                    </Button>
                  </td>
                  <td className='text-center' >

                    {/* <Button variant="primary" size='sm' onClick={findItemHandle.bind(this, category._id)}>EditFind</Button> {' '} */}
                    <Button variant="primary" size='sm'
                    onClick={ ()=>{ getOneHandle(category._id) } }
                    //onClick={ ()=>{ console.log('name, category.name) } }
                    //onClick={() => { setOpenFormEdit(true) }}        
                    to={`/${ADMIN_URI}/categoryEdit`}  as={Link} 
                    >Edit1111</Button> {' '}

                    
                    <Button variant="danger" size='sm'
                      //onClick={() => { console.log(category._id) }}
                      onClick={() => deleteHandle(category._id)}
                      
                    >Delete</Button>
                    {/* <Button variant="danger" size='md' onClick={deleteOne.bind(this, category._id)}  >Delete</Button> */}

                  </td>

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
 
    {renderCategory}     
   
    </>)
}
