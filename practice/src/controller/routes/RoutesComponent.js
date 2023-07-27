import React from "react";
import { Route, Routes } from "react-router-dom";
import { PATH_HOME, PATH_LOGIN } from "../../resources/constants/Url";
import Login from "../../views/login/Login";
import Home from "../../views/home/Home";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route exact path={PATH_LOGIN} element={<Login></Login>}></Route>
      <Route exact path={PATH_HOME} element={<Home></Home>}></Route>
    </Routes>
  );
}
