import { useContext } from 'react'
import Button from '../../components/button'
import { Container } from '../../components/container'
import { AuthContext } from '../../store/auth'

const HomePage = () => {
  const { authState, logOut } = useContext(AuthContext)

  return (
    <Container width="350px">
      Hello, {authState.name}!
      <Button onClick={logOut}>Log Out</Button>
    </Container>
  )
}

export default HomePage
