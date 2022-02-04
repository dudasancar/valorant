import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Agents from "./pages/Agents";

function RoutesValorant() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/agents" element={<Agents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesValorant;
