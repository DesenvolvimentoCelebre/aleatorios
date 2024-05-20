import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TelaLogin from "./rotas/TelaLogin";
import Home from "./rotas/Home";
import CadastroUsuario from "./rotas/CadastroUsuario";
import Usuarios from "./componentes/Usuarios";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/listar-usuarios" element={<Usuarios />} />
      </Routes>
    </div>
  );
}

export default App;
