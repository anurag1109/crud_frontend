import react from "react";
import Reactdom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./src/components/navbar";
import Home from "./src/components/Home";
import Signup from "./src/components/Signup";
import Login from "./src/components/Login";
import Post from "./src/components/Post";
import Update from "./src/components/update";
import Logout from "./src/components/Logout";
import Addpost from "./src/components/Addpost";
const Applayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const appRouters = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/update/:id",
        element: <Update />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/addpost",
        element: <Addpost />,
      },
    ],
  },
]);

const root = Reactdom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouters} />);
