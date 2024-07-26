import './aside.css'
import logoHome from '../../app/assets/icons8-home-50.png'
import { Link } from 'react-router-dom'
const Aside = () => {
  return (
    <>
      <ul className='aside'>
        <li>
          <img className='logoAside' src={logoHome} alt="" />
          <Link to={"/"}>Home</Link>
        </li>
      </ul>
    </>
  )
}

export default Aside