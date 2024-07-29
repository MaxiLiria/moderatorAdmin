import logo from "../../app/assets/file.enc.jpeg";
import { useUserContext } from '../UserProvider';
import logOutlogo from "../../app/assets/logout.png";
import { useNavigate } from "react-router-dom";
import './navbar.css'

const NavBar = () => {
  const [user, setUser] = useUserContext();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
      <nav>
        <img className='logo' src={logo} alt="" />
        <ul className='list'>
          <li>
            <h3>ADMIN-MODERATOR</h3>
          </li>
        </ul>
        <button className="buttonLogout" onClick={logout}>
          <img className="logout" src={logOutlogo} alt="LogOut" />
        </button>
       
      </nav>
    
  )
}

export default NavBar