import {Navigate, Route, Routes } from "react-router-dom";
import Home from "../../react_hooks/src/routes/Home";
import UserCrud from "./user/UserCrud";

const Routes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route path="/users" element={<UserCrud />}></Route>
      <Route path="*" element={<Navigate to="/" replace />}></Route>
    </Routes>
  );
};
