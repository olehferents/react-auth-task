import { createContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import authReducer, { LOG_IN, LOG_OUT } from './reducer'

const AUTH_DATA_KEY = 'authData'

const AuthContext = createContext()
const { Provider } = AuthContext

const AuthProvider = ({ children }) => {
  const authData = JSON.parse(localStorage.getItem(AUTH_DATA_KEY))
  const [state, dispatch] = useReducer(authReducer, { authData })
  const navigate = useNavigate()

  const logIn = (loginData) => {
    localStorage.setItem(AUTH_DATA_KEY, JSON.stringify(loginData))

    dispatch({ type: LOG_IN, payload: loginData })
  }

  const logOut = () => {
    localStorage.removeItem(AUTH_DATA_KEY)
    dispatch({ type: LOG_OUT })

    navigate('/login')
  }

  const isLoggedIn = () => {
    return !!state?.authData
  }

  useEffect(() => {
    if (state?.authData) {
      navigate('/')
    }
  }, [state?.authData])

  return (
    <Provider value={{
      authState: state?.authData,
      logIn,
      logOut,
      isLoggedIn,
    }}>
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }
