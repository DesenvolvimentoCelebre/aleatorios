import React from "react";
import "./App.css";
import { useAuth } from "./hooks/useAuth.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import TelaLogin from "./rotas/TelaLogin.jsx";
import Home from "./rotas/Home.jsx";
import CadastroUsuario from "./rotas/CadastroUsuario.jsx";
import Usuarios from "./rotas/Usuarios.jsx";
import Estoque from "./rotas/Estoque.jsx";
import PDV from "./rotas/PDV.jsx";
import Resumo from "./componentes/Resumo.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { auth, loading } = useAuth();

  console.log(loading);

  if (loading) {
    return <p>Carregando...</p>;
  }
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/login"
          element={!auth ? <TelaLogin /> : <Navigate to="/" />}
        />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route
          path="/listar-usuarios"
          element={auth ? <Usuarios /> : <Navigate to="/login" />}
        />
        <Route
          path="/listar-estoque"
          element={auth ? <Estoque /> : <Navigate to="/login" />}
        />
        <Route
          path="/pdv"
          element={auth ? <PDV /> : <Navigate to="/login" />}
        />
        <Route path="/resumo" element={<Resumo />} />
      </Routes>
    </div>
  );
}

export default App;
