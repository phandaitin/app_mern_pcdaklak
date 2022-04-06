


import {   GET_ALL_SLIDER  } from "../constants/const"


const initialState = {
  sliders: []
}
export const SliderReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {

    case GET_ALL_SLIDER:
      return {
        ...state,
        sliders: payload
      }
  
  
      default:
      return state
  }


}

// Selector
export const sliderlSelector = state => state.SliderReducer

     
    //   return {
    //     ...state,
    //     categories: state.categories.map(category => {
    //       if (category._id === payload) category.check = !category.check
    //       return category
    //     })
    //   }
    // case ADD_ONE:
    //   return {
    //     ...state,
    //     categories: [...state.categories, payload]
    //     //categories:  payload          
    //   }

    // case DELETE_ONE:
    //   return {
    //     ...state,
    //     categories: state.categories.filter(category => category.id !== payload)
    //   }

    // case CHANGE_STATUS:
    //   return {
    //     ...state,
    //     categories: state.categories.filter(category => category.id !== category)
    //   }
  


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