export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

const authReducer = (state, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        authData: action.payload,
      }
    case LOG_OUT:
      return {
        ...state,
        authData: null,
      }
    default:
      return state
  }
}

export default authReducer
