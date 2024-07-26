import { useState } from 'react'
import './login.css'
import { postUser } from '../../app/api/login'
import { useUserContext } from '../UserProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [, setUser] = useUserContext();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    await postUser(username, password).then((data) => {
      setUser({ ...data.data, username, password });
    });
    navigate("/");
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input type="text" name="username" required onChange={e => setUsername(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" name="password" required onChange={e => setPassword(e.target.value)} />
        <br />
        <input type="submit" value="Login" />
      </form>
    </>
  )
}

export default Login