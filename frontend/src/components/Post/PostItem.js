import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCurrentUser } from '../../store/actions/AuthAction'
import { changeStatusPost, deleteOnePost, getCheckedPost, getOnePost } from '../../store/actions/PostAction'
import { ADMIN_URI } from '../../store/constants/const'
import { authSelector } from '../../store/reducers/AuthReducer'


export default function PostItem({ post, index , users}) {


  const dispatch = useDispatch()



//   const  {users }  = useSelector(authSelector) 
// console.log(users)

  const deleteHandle = (Id) => {
    dispatch(deleteOnePost(Id))
  }
  const getOneHandle = (Id) => {
    dispatch(getOnePost(Id))
   console.log( Id)
    //setInputState({ posts})
  }
  
  let date = new Date(post.createdAt)
   let flag = users !== post.author.name ? true : false

  //==========================================================================
  return (<>
    <td className='text-center' style={ {width :'3%' }}>
      <Form.Check type='checkbox' name='check'
        style={post.check ? { background: '#ccd' } : { background: '' }}
        onChange={() => { dispatch(getCheckedPost(post._id)) }}
      />
    </td>
    <td className='text-center'>{index + 1}</td>
    <td>{post.category}</td>
    <td>{post.name}</td>    
    <td className='text-center' >
      <Button size='sm' variant={post.status === 'active' ? 'success' : 'warning'}
      disabled={flag}
        onClick={() => dispatch(changeStatusPost(post._id, post.status))}
      >         {post.status}
      </Button>
    </td>

    <td className='text-center' >   {post.author.name}   </td>
    <td className='text-center' >   {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}   </td>




    <td className='text-center' >

      {/* <Button variant="primary" size='sm' onClick={findItemHandle.bind(this, post._id)}>EditFind</Button> {' '} */}
      <Button variant="primary" size='sm'disabled={flag} to={`/${ADMIN_URI}/postEdit`}  as={Link} 
        onClick={() => { getOneHandle(post._id) }}
      //onClick={ ()=>{ console.log(categories ) } }
      //onClick={() => { setOpenFormEdit(true) }}        
  
      >Edit </Button> {' '}
      <Button variant="danger" size='sm' disabled={flag}
        //onClick={() => { console.log(post._id) }}
        onClick={() => deleteHandle(post._id)}
      >Delete</Button>
      {/* <Button variant="danger" size='md' onClick={deleteOne.bind(this, post._id)}  >Delete</Button> */}

    </td>
  </>)
}
 

    // {/* <td className='text-center' >

    //     <Button variant="primary" size='sm' onClick={() => { getInfo(post._id) }} 
    //         to={`/${ADMIN_URI}/postEdit`}as={link} disabled={flag} 
    //     >Edit
    //     </Button>
    //     {' '}
    //     <Button variant="danger" size='sm' disabled={flag} onClick={() => { deleteOnClick(post._id) }}>Delete</Button>
    //     {/* // onClick={()=>{getInfo(post._id)}} // hoac onClick={getInfo.bind(this,post._id)}   */}
    //   </td> 
    // */}
