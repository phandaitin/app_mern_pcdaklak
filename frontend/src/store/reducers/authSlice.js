
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_URI } from '../../constants/const'


// export default function authSlice() {
//   return (
//     <div>authSlice</div>
//   )
// }





// Reducer Thunk
export const getCurrentUser = createAsyncThunk('user/getCurrentUser', async () => {
    //const response = await axios.get( 'http://localhost:5000/api/auth/getCurrentUser' )

    //const  dispatch = useDispatch()
    try {
        const token = localStorage.getItem('token')        
        const option = {
            method: 'get',
            url: `${API_URI}/auth/getCurrentUser`,
            headers: { Authorization: `Bearer ${token}` }
        }
        const response = await axios(option)

        if (response.data.success) {
            return { 
                isAuthenticated: true,
                users: response.data.userName 
            }
        }

    } catch (error) {
        console.log('catch roi>>>')
        localStorage.removeItem("token")
    }
})

//==========================================================
export const login = createAsyncThunk('user/login', async (data) => {
    try {
        const option = {
            method: 'post',
            url: `${API_URI}/auth/login`,
            data
        }
        
        const response = await axios(option)
        localStorage.setItem("token", response.data.token)
        return {
            isAuthenticated: true,
            users: response.data.userName
        }        
    } catch (error) {
        if (error.response.data)
            return error.response.data
        else
            return { success: false, message: error }
    }
})
//==========================================================
export const logout = createAsyncThunk('user/logout', async () => {    
    localStorage.removeItem("token") 
        return {
            isAuthenticated: false ,
            users: null
        }        
})

//=========================================================
const authSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        users: []
    },

    reducers: {},
    extraReducers: {
        // getCurrentUser
        [getCurrentUser.fulfilled]: (state, action) => {
            state.users = action.payload
            state.isAuthenticated = true
            return state
            //console.log('users >>>', state.users)
        },
        //login
        //[login.pending]: (state, action) => {console.log('Pending...')        },
        [login.fulfilled]: (state, action) => {
            state.users = action.payload 
            state.isAuthenticated = true
           //console.log('ben slice ', state.isAuthenticated )
        },
         //logout        
        [login.fulfilled]: (state, action) => {
            state.users = action.payload 
            state.isAuthenticated = false           
        },

        // loginUser.fulfilled]: (state, { payload }) => {
        //     state.email = payload.email;
        //     state.username = payload.name;
        //     state.isFetching = false;
        //     state.isSuccess = true;
        //     return state;
        //   },


        // 	// Get all todos
        // 	[getTodos.pending]: (state, action) => {
        // 		console.log('Fetching todos from backend ....')
        // 	},
        // 	[getTodos.fulfilled]: (state, action) => {
        // 		console.log('Done')
        // 		state.allTodos = action.payload
        // 	},
        // 	[getTodos.rejected]: (state, action) => {
        // 		console.log('Failed to get todos!!!')
        // 	},

        // 	// Add todo
        // 	[addTodo.fulfilled]: (state, action) => {
        // 		state.allTodos.unshift(action.payload)
        // 	},

        // 	// Delete todo
        // 	[deleteTodo.fulfilled]: (state, action) => {
        // 		const todoId = action.payload
        // 		state.allTodos = state.allTodos.filter(todo => todo.id !== todoId)
        // 	}
    }
})

// Async action creator, action and reducer dispatch

/* export const getTodos = () => async dispatch => {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos?_limit=5'
        )
        dispatch(todosFetched(response.data))
    } catch (error) {
        console.log(error)
    }
} */




// Reducer
const authReducer = authSlice.reducer

// Selector
export const userSelector = state => state.authReducer.users
//export const userSelector = state => state.user


// Action export
export const {  } = authSlice.actions

// Export reducer
export default authReducer  
