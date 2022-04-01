

const initialState = {
  users: []
}
export const AuthReducer = (state= initialState, action) => {
const { type, payload   } = action
  switch (type) {
    case 'GET_CURRENT_USER':      
      
      //console.log('REDUCER ',payload)

      return {
        ...state, 
        users  : payload
      }
      
    default:
      return state
  }
}

 

export const authSelector = state => state.AuthReducer

 