import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login/Login";
import Home from "./Component/Page/Home/Home";
import Detail from "./Component/Page/Detail/Detail";
import FormEdit from "./Component/Form/FormEdit/FormEdit";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="App">
      {isLogin ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home setIsLogin={setIsLogin} />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/edit/:id" element={<FormEdit />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default App;
