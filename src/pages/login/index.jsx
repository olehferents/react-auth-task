import { useContext} from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../components/button'
import { Container } from '../../components/container'
import { Input } from '../../components/input'
import { AuthContext } from '../../store/auth'

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange'
  })
  const { logIn } = useContext(AuthContext)

  const handleLogIn = (data) => {
    logIn(data)
  }

  return (
    <Container width="750px">
      <Container flexDirection="column" >
        <Input type="text" placeholder="Enter a name" {...register('name', {
          required: {
            value: true,
            message: 'Name is required!'
          }
        })} />
        {errors?.name?.message || ''}
      </Container>
      <Container flexDirection="column">
        <Input type="password" placeholder="Enter a password" {...register('password', {
          required: {
            value: true,
            message: 'Password is required!'
          }
        })} />
        {errors?.password?.message || ''}
      </Container>
      <Button onClick={handleSubmit(handleLogIn)}>Log in</Button>
    </Container>
  )
}

export default LoginPage
