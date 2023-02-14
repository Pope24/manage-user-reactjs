import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login/Login";
import Home from "./Component/Page/Home/Home";
import Detail from "./Component/Page/Detail/Detail";
import FormEdit from "./Component/Form/FormEdit/FormEdit";
import Navbar from "./Component/Page/Navbar/Navbar";
import Footer from "./Component/Page/Footer/Footer";
import FormAdd from "./Component/Form/FormAdd/FormAdd";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      {isLogin ? (
        <BrowserRouter>
          <Navbar setIsLogin={setIsLogin} />
          <Routes>
            <Route path="/" element={<Home setIsLogin={setIsLogin} />} />
            <Route path="/add-user" element={<FormAdd />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default App;
