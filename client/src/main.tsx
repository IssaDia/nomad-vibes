import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AuthLayout from "./pages/layouts/AuthLayout";
import Login from "./components/Login";
import MainLayout from "./pages/layouts/MainLayout";
import Home from "./pages/Home";
import { AuthProvider } from "./context/auth/AuthContext";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
