import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Challenge from "./components/challenge/Challenge"


const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Home />} />
          <Route path="/challenge/:id" element={<Challenge />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router