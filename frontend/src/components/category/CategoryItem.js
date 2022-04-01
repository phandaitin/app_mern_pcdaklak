import React   from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { changeStatus, deleteOne,   getChecked } from '../../store/actions/CategoryAction'


export default function CategoryItem({ category, index }) {

  const dispatch = useDispatch()

  const deletehandle = (Id) => {
    dispatch(deleteOne(Id))
  }


  //===========================================================
  return (<>
    <td className='text-center'>
      <Form.Check type='checkbox' name='check'
        style={category.check ? { background: '#ccd' } : { background: '' }}
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
        //onClick={ onClickEdit.bind(this, category._id) }
        //onClick={() => { setOpenFormAdd(true) }}        
      >Edit</Button> {' '}
      <Button variant="danger" size='sm'
        //onClick={() => { console.log(category._id) }}
        onClick={() => deletehandle(category._id)}
      >Delete</Button>
      {/* <Button variant="danger" size='md' onClick={deleteOne.bind(this, category._id)}  >Delete</Button> */}

    </td>
  </>)
}
