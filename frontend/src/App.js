import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TelaLogin from "./rotas/TelaLogin";
import Home from "./rotas/Home";
import CadastroUsuario from "./rotas/CadastroUsuario";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
      </Routes>
    </div>
  );
}

export default App;
