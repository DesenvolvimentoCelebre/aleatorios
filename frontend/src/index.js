import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import TelaLogin from "./rotas/TelaLogin.jsx";
import Home from "./rotas/Home.jsx";
import CadastroUsuario from "./rotas/CadastroUsuario.jsx";
import Usuarios from "./rotas/Usuarios.jsx";
import Estoque from "./rotas/Estoque.jsx";
import PDV from "./rotas/PDV.jsx";
import Resumo from "./componentes/Resumo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <TelaLogin />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cadastro-usuario",
        element: <CadastroUsuario />,
      },
      {
        path: "/listar-usuarios",
        element: <Usuarios />,
      },
      {
        path: "/listar-estoque",
        element: <Estoque />,
      },
      {
        path: "/pdv",
        element: <PDV />,
      },
      {
        path: "/resumo",
        element: <Resumo />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
