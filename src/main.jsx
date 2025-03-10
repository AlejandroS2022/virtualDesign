import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from "./api/router.jsx";
import { RouterProvider } from "react-router";

import './styles/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
