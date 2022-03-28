import { Navigate } from 'react-router-dom'
import HomePage from './pages/home'
import LoginPage from './pages/login'

const routes = (isLoggedIn) => {
  return [
    {
      path: '/',
      element: isLoggedIn ? <HomePage /> : <Navigate to="/login" />,
    },
    {
      path: '/login',
      element: !isLoggedIn ? <LoginPage /> : <Navigate to="/" />,
    },
    {
      path: '*',
      element: isLoggedIn ? <Navigate to="/" /> : <Navigate to="/login" />,
    },
  ]
}

export default routes
