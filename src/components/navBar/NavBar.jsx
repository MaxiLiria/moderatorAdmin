import logo from "../../app/assets/file.enc.jpeg";
import { LogOutBtn, NavBarStyle } from "../../app/Style";
import { useUserContext } from '../UserProvider';
import logOutlogo from "../../app/assets/logout.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [user, setUser] = useUserContext();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <NavBarStyle>
      <nav>
        <img className='logo' src={logo} alt="" />
        <ul className='list'>
          <li>
            <h3>ADMIN-MODERATOR</h3>
          </li>
        </ul>
        <LogOutBtn onClick={logout}>
          <img src={logOutlogo} alt="LogOut" />
        </LogOutBtn>
      </nav>
    </NavBarStyle>
  )
}

export default NavBar