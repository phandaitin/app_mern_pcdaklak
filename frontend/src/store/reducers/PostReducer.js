
import {  ADD_ONE_POST,  CHANGE_STATUS_POST, DELETE_ONE_POST, GET_ALL_POST, GET_CHECKED_POST, GET_ONE_POST } from '../constants/const';


const initialState = {
  posts: [],
  post: []
}
export const PostReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_ALL_POST:
      return {
        ...state,
        posts: payload
      }
    
    case GET_ONE_POST:        
      return {
          ...state,
          posts: payload    
          //posts: state.posts.find(post => post._id === payload)     
          //const post = postState.posts.find(post => post._id === Id)
        }
    
    case GET_CHECKED_POST:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post._id === payload) post.check = !post.check
          return post
        })
      }
      case ADD_ONE_POST:
        return {
          ...state,          
          posts: [...state.posts,   payload] 
        }

      case DELETE_ONE_POST:
        return {
          ...state,          
          posts: state.posts.filter(post => post.id !== payload) 
        }

      case CHANGE_STATUS_POST:
			return {
				...state,
				posts: state.posts.filter(post => post.id !== post)				
			}

    default:
      return state
  }
}

// Selector
export const postSelector = state => state.PostReducer

 