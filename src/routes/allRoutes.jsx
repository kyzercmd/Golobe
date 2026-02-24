import { Routes, Route } from "react-router";
import { Home } from "../pages/Home/Home";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};
