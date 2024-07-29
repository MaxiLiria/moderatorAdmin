import logoHome from '../../app/assets/home.png'
import { Link } from 'react-router-dom'
import { AsideStyle } from '../../app/Style'
import logoChallenge from "../../app/assets/challenge.png";

const Aside = () => {
  return (
    <AsideStyle>
      <ul>
        <li>
          <img src={logoHome} alt="" />
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <img src={logoChallenge} alt="" />
          <Link to={"/challenge/:id"}>Challenge</Link>
        </li>
      </ul>
    </AsideStyle>
  )
}

export default Aside