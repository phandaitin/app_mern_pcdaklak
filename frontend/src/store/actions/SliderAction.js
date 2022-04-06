

import axios from 'axios';
 
import {  API_URI, GET_ALL_SLIDER } from '../constants/const';
 
const collection = 'slider'
 
//================================================ 


export const getAllSlider = () => async dispatch => {
  try { 
    const option = {
      method: 'get',
      url: `${API_URI}/${collection}?limit=2`
    }
    const response = await axios(option)
    dispatch({
      type: GET_ALL_SLIDER,
      payload: response.data.data
    })

  } catch (error) {
    if (error.response.data)
      return error.response.data
    else
      return { success: false, message: error }
  }
} 