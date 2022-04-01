

import axios from 'axios';
import { API_URI } from '../constants/const';
const collection = 'auth'
//===============================================================
export const getCurrentUser =  () => {
  return async dispatch => {
    try {
      const token = localStorage.getItem('token')
      const option = {
        method: 'get',
        url: `${API_URI}/${collection}/getCurrentUser`,
        headers: { Authorization: `Bearer ${token}` }
      }
      const response = await axios(option)      
      
      
      //console.log( 'ACTION', response.data.userName  )
      if (response.data.success) {        
        dispatch({
          type: 'GET_CURRENT_USER',
          //payload: { user: response.data.userName }
          payload: response.data.userName 
        })
      }

    } catch (error) {
      //console.log('catch roi>>>' )
      localStorage.removeItem("token")
    }
  }
}
//==========================================================
export const login =  data => {
  return async dispatch => {
    try {
      const option = {
        method: 'post',
        url: `${API_URI}/auth/login`,
        data
      }
      const response = await axios(option)
      localStorage.setItem("token", response.data.token)
      dispatch({
        type: 'GET_CURRENT_USER',
        payload:  response.data.userName        
      })
      return response.data
    } catch (error) {
      // if (error.response.data)
      //   return error.response.data
      // else
        return { success: false, message: error }
    }
  }
}

//==========================================================
export const logout =  data => {
  return async dispatch => {
    localStorage.removeItem("token")
    dispatch({
      type: 'GET_CURRENT_USER',
      payload: {
        isAuthenticated: false,
        user: null
      }
    })
  }
}
