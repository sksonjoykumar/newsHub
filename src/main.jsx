import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import GlobalContext from "./global-context/GlobalContext.jsx";

// Define routes
const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

// Render application
ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContext>
    <RouterProvider router={router} />
  </GlobalContext>
);
