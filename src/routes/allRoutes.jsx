import { Routes, Route } from "react-router";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};
