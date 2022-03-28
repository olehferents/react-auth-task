import { useContext } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { AuthContext } from './store/auth'

const App = () => {
  const { isLoggedIn } = useContext(AuthContext)
  const routing = useRoutes(routes(isLoggedIn()))

  return (
    <>
      {routing}
    </>
  )
}

export default App
