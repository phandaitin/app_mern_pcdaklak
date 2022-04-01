


import { ADD_ONE, CHANGE_STATUS, DELETE_ONE,  GET_ALL, GET_CHECKED, GET_ONE } from "../constants/const"


const initialState = {
  categories: [],
  category: []
}
export const CategoryReducer = (state = initialState, action) => {
  const { type, payload } = action
  //export const CategoryReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case GET_ALL:
      return {
        ...state,
        categories: payload
      }
    
      case GET_ONE:        
      return {
          ...state,
          category: payload    
          //categories: state.categories.find(category => category._id === payload)     
          //const post = postState.posts.find(post => post._id === Id)
        }
    
        case GET_CHECKED:
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category._id === payload) category.check = !category.check
          return category
        })
      }
      case ADD_ONE:
        return {
          ...state,          
          categories: [...state.categories,payload]
          //categories:  payload          
        }

      case DELETE_ONE:
        return {
          ...state,          
          categories: state.categories.filter(category => category.id !== payload) 
        }

      case CHANGE_STATUS:
			return {
				...state,
				categories: state.categories.filter(category => category.id !== category)				
			}

    default:
      return state
  }
}

// Selector
export const categorySelector = state => state.CategoryReducer


// const initialState = {
// 	todos: []
// }

// const todoReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case GET_TODOS:
// 			return {
// 				...state,
// 				todos: action.payload
// 			}

// 		case MARK_COMPLETE:
// 			return {
// 				...state,
// 				todos: state.todos.map(todo => {
// 					if (todo.id === action.payload) todo.completed = !todo.completed
// 					return todo
// 				})
// 			}

// 		case ADD_TODO:
// 			return {
// 				...state,
// 				todos: [...state.todos, action.payload]
// 			}

// 		case DELETE_TODO:
// 			return {
// 				...state,
// 				todos: state.todos.filter(todo => todo.id !== action.payload)
// 			}

// 		default:
// 			return state
// 	}
// }

// export default todoReducer