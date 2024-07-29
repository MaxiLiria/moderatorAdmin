import { Outlet } from "react-router-dom"
import NavBar from "../components/navBar/NavBar"
import Aside from "../components/aside/Aside"
import './index.css'

const Layout = () => {
  return (
    <>
      <NavBar />
        <div className="body">
          <Aside />
          <Outlet />
        </div>
          <div className="footer"></div>
    </>
  )
}

export default Layout