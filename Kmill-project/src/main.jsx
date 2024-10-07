import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
<<<<<<< HEAD
import "./components/cssMainComp/cssmika.css";
=======
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CookieDetail from "./components/CookieDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cookie",
    element: <CookieDetail />,
  },
  { path: "/product/:productDetail", element: <CookieDetail /> },
]);
>>>>>>> 0f2731d808969001ecbef6178b5c3f2bb26a996b

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
