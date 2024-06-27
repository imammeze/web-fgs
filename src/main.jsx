import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Penginapan from "./Penginapan.jsx";
import LoginPages from "./pages/Login.jsx";
import AdminPages from "./admin/AdminPages";
import DetailPenginapan1 from "./penginapan/DetailPenginapan1.jsx";
import DetailPenginapan2 from "./penginapan/DetailPenginapan2.jsx";
import DetailPenginapan3 from "./penginapan/DetailPenginapan3.jsx";
import DetailPenginapan4 from "./penginapan/DetailPenginapan4.jsx";
import DetailPenginapan5 from "./penginapan/DetailPenginapan5.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/penginapan",
    element: <Penginapan />,
  },
  {
    path: "/penginapan/detail/1",
    element: <DetailPenginapan1 />,
  },
  {
    path: "/penginapan/detail/2",
    element: <DetailPenginapan2 />,
  },
  {
    path: "/penginapan/detail/3",
    element: <DetailPenginapan3 />,
  },
  {
    path: "/penginapan/detail/4",
    element: <DetailPenginapan4 />,
  },
  {
    path: "/penginapan/detail/5",
    element: <DetailPenginapan5 />,
  },
  {
    path: "/login",
    element: <LoginPages />,
  },
  {
    path: "/admin/penginapan",
    element: <AdminPages />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
