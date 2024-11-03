import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './layouts/RootLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
