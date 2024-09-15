import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { Profile, ItemDetails, Donate, Community, Donor } from "./pages/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/items/:id",
    element: <ItemDetails />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/donor",
    element: <Donor />,
  },
  {
    path: "/donate",
    element: <Donate />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
