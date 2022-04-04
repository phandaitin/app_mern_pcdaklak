

import axios from 'axios';
 
import { useDispatch } from 'react-redux';
import { ADD_ONE, API_URI, CHANGE_STATUS, DELETE_ONE, FIND_ONE, GET_ALL, GET_CHECKED, GET_ONE } from '../constants/const';
import { CategoryReducer } from '../reducers/CategoryReducer';
const collection = 'category'
const dispatch = useDispatch  
//================================================ 


export const getAll = () => async dispatch => {
  try { 		//const response = await axios.get(			'https://jsonplaceholder.typicode.com/todos?_limit=3'		)
    const option = {
      method: 'get',
      url: `${API_URI}/${collection}`
    }
    const response = await axios(option)
    dispatch({
      type: GET_ALL,
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

export const getOne = (id) => async dispatch => {
  try {
    const option = {
      method: 'get',
      url: `${API_URI}/${collection}/${id}`
    }
    const response = await axios(option)
    
    if (response.data.success) {      
      dispatch({
        type: GET_ONE,
        payload: response.data.data
      })
      //return response.data.data
    }
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error }
  }
}

//  export const findOne = categoryId => dispatch => {
  //export const getOne = categoryId => dispatch => {    
  //  export const getOne = categoryId =>  {    
  // const category = CategoryReducer.categories.find(category => category._id === categoryId)
  // //const post = postState.posts.find(post => post._id === Id)
  // console.log(category)
  // dispatch({ 
  //   type: GET_ONE , 
  //   payload: category 
  // })
//}
 

//================================================ 
export const addOne = (data) => async dispatch => {
  try {
    const option = {
      method: 'post',
      url: `${API_URI}/${collection}`,
      data
    }
    const response = await axios(option)
    if (response.data.success) {
      dispatch({
        type: ADD_ONE,
        payload: response.data.data
      })
    } else {
      console.log(response.data)
    }
    //dispatch( getAll() )
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error }
  }
}

//================================================ 
export const deleteOne = Id => async dispatch => {
  try { 		//await axios.delete(`${API_URI}/${collection}/${Id}`)    
    const option = {
      method: 'delete',
      url: `${API_URI}/${collection}/${Id}`
    }
    const response = await axios(option)
    if (response.data.success) {
      dispatch({
        type: DELETE_ONE,
        payload: Id
      })
    }
    dispatch(getAll())

  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error }
  }
}
//================================================ 
//const changeStatus = async data => {
export const changeStatus = (id, status) => async dispatch => {
  try {
    const option = {
      method: 'put',
      url: `${API_URI}/${collection}/changeStatus/${id}/${status}`
      //,data
    }
    const response = await axios(option)
    dispatch({
      type: CHANGE_STATUS,
      payload: response.data.data
    })
    dispatch(getAll())
  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error }
  }
}
//================================================ 
export const getChecked = id => dispatch => {
  dispatch({
    type: GET_CHECKED,
    payload: id
  })
}
