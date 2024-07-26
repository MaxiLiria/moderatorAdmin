import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../components/login/Login'


const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;