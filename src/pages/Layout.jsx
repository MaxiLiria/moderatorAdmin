import { Outlet } from "react-router-dom"
import NavBar from "../components/navBar/NavBar"
import Aside from "../components/aside/Aside"
import { HomeStyle } from '../app/Style'


const Layout = () => {
  return (
    <>
      <NavBar />
      <HomeStyle>
        <div className="body">
          <Aside />
          <Outlet />
        </div>
      </HomeStyle>
    </>
  )
}

export default Layout