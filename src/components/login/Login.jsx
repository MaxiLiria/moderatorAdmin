import { useState } from 'react'
import { postUser } from '../../app/api/login'
import { useUserContext } from '../UserProvider'
import { useNavigate } from 'react-router-dom'
import { LoginStyle } from '../../app/Style';

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
    <LoginStyle>
      <h1>MODERATOR ACCESS</h1>
      <form onSubmit={handleLogin}>
        <input
          autoComplete="off"
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={e => setUsername(e.target.value)}
          required />
        <input
          autoComplete="off"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          required />
        <button type="submit" value="Login"> LOGIN </button>
      </form>
    </LoginStyle>
  )
}

export default Login