import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import TelaLogin from "./rotas/TelaLogin";
import Home from "./rotas/Home";
import CadastroUsuario from "./rotas/CadastroUsuario";
import Usuarios from "./componentes/Usuarios";

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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
