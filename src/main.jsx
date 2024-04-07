import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import Login from "./auth/Login";
import Register from "./auth/Register";
import HomeContent from "./components/HomeContent";
import Home from './Home';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    children:[
      {
        path: '/',
        element: <HomeContent/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ],
    element: <Home></Home>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
