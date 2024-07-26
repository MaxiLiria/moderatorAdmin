import logo from "../../app/assets/file.enc.jpeg";
import './navBar.css'

const NavBar = () => {
  return (
    <>
      <nav>
        <img className='logo' src={logo} alt="" />
        <ul className='nav'>
          <li>
            <h3>Admin-Moderator</h3>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar