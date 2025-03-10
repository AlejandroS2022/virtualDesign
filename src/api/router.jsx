import App from "../components/App.jsx";
import { createBrowserRouter } from "react-router";
import CanvasFile from "../components/CanvasFile.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <NotFound />,
  },
  {
    path: "/test",
    element: <CanvasFile />,
    // errorElement: <NotFound />,
  },
]);
