 
import {applyMiddleware, combineReducers, createStore} from 'redux'
import reduxThunk from 'redux-thunk'
import { CategoryReducer } from './reducers/CategoryReducer'
import { PostReducer }     from './reducers/PostReducer'
import { AuthReducer }     from './reducers/AuthReducer'
import { SliderReducer } from './reducers/SliderReducer'
 



const rootReducer = combineReducers({    
    AuthReducer,
    CategoryReducer ,
    PostReducer ,    
    SliderReducer
})
 
const store = createStore(rootReducer,applyMiddleware(reduxThunk))

export default store