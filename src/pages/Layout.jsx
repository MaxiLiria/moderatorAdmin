import './index.css'
import { Outlet } from "react-router-dom"
import NavBar from "../components/navBar/NavBar"
import Aside from "../components/aside/Aside"


const Layout = () => {
  return (
    <>
    <NavBar/>
    <div className="body">
    <Aside/>
    <Outlet/>
    </div>
    </>
  )
}

export default Layout