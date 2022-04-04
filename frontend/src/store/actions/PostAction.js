

import axios from 'axios';
import { useSelector } from 'react-redux';
import { API_URI, ADD_ONE_POST,  CHANGE_STATUS_POST, DELETE_ONE_POST, GET_ALL_POST, GET_CHECKED_POST, GET_ONE_POST, UPDATE_ONE_POST } from '../constants/const';
import { userSelector } from '../reducers/AuthReducer';
const collection = 'post'

// const dispatch = useDispatch()



//================================================ 
export const getAllPost = () => async dispatch => {
  try { 
    const option = {
      method: 'get',
      url: `${API_URI}/${collection}`
    }
    const response = await axios(option)
    dispatch({
      type: GET_ALL_POST,
      payload: response.data.data
    })

  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error }
  }
}
//================================================ 
// const getOne = Id => { // Hàm này dùng để gán giá trị của Post đc chọn và chỗ post tại dòng 14 ở trên 
//   const post = postState.posts.find(post => post._id === Id)
//   dispatch({
//     type: 'GET_ONE',
//     payload: post
//   })
// }

//export const getOne = async id => {
export const getOnePost = (id) => async dispatch => {
  try {
    const option = {
      method: 'get',
      url: `${API_URI}/${collection}/${id}`     
    }    
    const response = await axios(option)
    //console.log('action: ',response.data.data )
    
    if (response.data.success) {      
      dispatch({
        type: GET_ONE_POST,
        payload: response.data.data 
      })
      
    }
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error }
  }
}

// export const getOne = (id) =>  dispatch => {
//  // const editData = (items) => (dispatch) => {
//   dispatch({type: GET_ONE, payload: id})
//}

//================================================ 
export const addOnePost = (data) => async dispatch => {
  //const { users  } = useSelector(userSelector) 
  //const user = users.user
  //console.log('user', user)
  try {
    const token = localStorage.getItem('token')
    const option = {
      method: 'post',
      url: `${API_URI}/${collection}`,
      data ,
      headers: { Authorization: `Bearer ${token}` }
    }
    const response = await axios(option)
    //const author = { _id: response.data.data.author, name: user.name, email: user.email }
    //const author = { _id: response.data.data.author, name: 'NoName', email: 'NoEmail' }
    const author = { _id: response.data.data.author  }
    if (response.data.success) {
      dispatch({
        type: ADD_ONE_POST,
        //payload: response.data.data
        payload: { ...response.data.data, author }
      })
    } else {
      console.log('error else ', response.data)
    }
    //dispatch( getAll() )
    // getAll()
    // return response.data
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error }
  }
}
 

//================================================ 
export const deleteOnePost = Id => async dispatch => {
  try { 		//await axios.delete(`${API_URI}/${collection}/${Id}`)    
    const option = {
      method: 'delete',
      url: `${API_URI}/${collection}/${Id}`
    }
    const response = await axios(option)
    if (response.data.success) {
      dispatch({
        type: DELETE_ONE_POST,
        payload: Id
      })
    }
    dispatch(getAllPost())

  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error }
  }
}

//============updateOnePost=============================== 
export const updateOnePost = data => async dispatch => {
  try {
    const option = {
      method: 'put',
      url: `${API_URI}/${collection}/${data._id}`,
      data
    }
    const response = await axios(option)
    if (response.data.success) {
      dispatch({
        type: UPDATE_ONE_POST,
        payload: response.data.data
      })
    }
  } catch (error) {
    return error.response.data
      ? error.response.data
      : { success: false, message:  error }
  }
}
//================================================ 
//const changeStatus = async data => {
export const changeStatusPost = (id, status) => async dispatch => {
  try {
    const option = {
      method: 'put',
      url: `${API_URI}/${collection}/changeStatus/${id}/${status}`
      //,data
    }
    const response = await axios(option)
    dispatch({
      type: CHANGE_STATUS_POST,
      payload: response.data.data
    })
    dispatch(getAllPost())
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error }
  }
}
//================================================ 
export const getCheckedPost = id => dispatch => {
  dispatch({
    type: GET_CHECKED_POST,
    payload: id
  })
}
