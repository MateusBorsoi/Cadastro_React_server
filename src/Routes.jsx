import { Navigate, Route, Routes } from "react-router-dom";

import UserCrud from "./user/UserCrud";
import Home from "./home/Home";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/users" element={<UserCrud />}></Route>
      <Route path="*" element={<Navigate to="/" replace />}></Route>
    </Routes>
  );
};

export default Routing;
