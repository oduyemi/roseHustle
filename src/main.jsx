import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import Home from "./routes/Home.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ThankYou from "./routes/Thankyou.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/thankyou",
        element: <ThankYou />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
