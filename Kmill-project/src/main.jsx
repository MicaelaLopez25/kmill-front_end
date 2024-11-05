import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./components/cssMainComp/cssmika.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CookieDetail from "./components/CookieDetail.jsx";
import Cookieiteams from "./components/Cookieitems.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Login from "./components/login-register/Login.jsx";
import Register from "./components/login-register/Register.jsx";
import Cookieorder from "./components/MiniCart/Order.jsx";
import UserRoles from "./components/login-register/Admin-Usu.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/productos",
    element: <Cookieiteams />,
  },
  {
    path: "/productos/:producto",
    element: <CookieDetail />,
  },
  { path: "/product/:productDetail", element: <CookieDetail /> },
  {
    path: "/nosotros",
    element: <Nosotros />,
  },
  {
    path: "/Login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/pedido",
    element: <Cookieorder />,
  },
  {
    path: "/UserRoles",
    element: <UserRoles />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
