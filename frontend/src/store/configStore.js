// import { configureStore } from '@reduxjs/toolkit'
// import authReducer   from './reducers/authSlice'
// import  messageReducer  from './reducers/authSlice'


// // Store
// const store = configureStore({
// 	reducer: {
// 		authReducer		,
// 		messageReducer
// 	}
// })
// export default store

//==================

import {applyMiddleware, combineReducers, createStore} from 'redux'
import reduxThunk from 'redux-thunk'
import { CategoryReducer } from './reducers/CategoryReducer'
import { PostReducer }     from './reducers/PostReducer'
import { AuthReducer }     from './reducers/AuthReducer'
 



const rootReducer = combineReducers({    
    CategoryReducer ,
    PostReducer ,
    AuthReducer
    
})
 
const store = createStore(rootReducer,applyMiddleware(reduxThunk))

export default store