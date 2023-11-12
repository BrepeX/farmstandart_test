import { Route, Routes } from "react-router-dom";
import { Home } from "@pages/Home.tsx";
import { New } from "@pages/New.tsx";

const Router = () => (
  <Routes>
    <Route path={"/"} element={<Home />} />
    <Route path={"/new"} element={<New />} />
  </Routes>
);

export default Router;
