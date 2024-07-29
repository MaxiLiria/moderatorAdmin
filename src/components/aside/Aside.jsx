import logoHome from '../../app/assets/icons8-casa-50.png'
import { Link } from 'react-router-dom'
import logoUsers from "../../app/assets/icons8-usuario-50.png";
import logoVideo from "../../app/assets/video.png";
import './aside.css'

const Aside = () => {
  return (
    <div className='aside'>
      <ul>
        <li className="aside-li" >
          <img className="aside-logo" src={logoHome} alt="" />
          <Link to={"/"}>Home</Link>
        </li>
        <li className="aside-li">
          <img className="aside-logo" src={logoUsers} alt="" />
          <Link to={"/challenge/:id"}>Users</Link>
        </li>
        <li className="aside-li">
          <img className="aside-logo" src={logoVideo} alt="" />
          <Link to={"/challenge/:id"}>Videos</Link>
        </li>
      </ul>
    </div>
  )
}

export default Aside