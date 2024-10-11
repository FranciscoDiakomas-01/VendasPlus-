import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css'
import 'swiper/css/navigation'
import "swiper/css/pagination"
import "swiper/css/scrollbar";
import {register } from 'swiper/element/bundle'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Product from './pages/product/index.jsx'
import Category from './pages/Category/index.jsx'
import Functionary from './pages/functionary/index.jsx'
import Finance from './pages/finance/finance.jsx'
import DashBoard from './pages/dash/index.jsx'
import Config from './pages/config/index.jsx'
import Login from './pages/login/index.jsx'
register()
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/function",
        element: <Functionary />,
      },
      {
        path: "/finance",
        element: <Finance />,
      },
      {
        path: "/config",
        element: <Config />,
      },
    ],
  },
  {
    path : '/login',
    element : <Login/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
