import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './Components/Root/Root.jsx'
import Login from './Components/Login/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CartProvider } from './Components/Context/CartContext.jsx'
import Signup from './Components/Signup/Signup.jsx'
import Categorywiseproduct from './Components/Categorywiseproduct/Categorywiseproduct.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Payment from './Components/Payment/Payment.jsx'
import Admin from './Components/Admin/Admin.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Root/>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  },
  {
    path: '/products/category/:id',
    element:<Categorywiseproduct />
  },
  {
    path: '/:user/cart',
    element:<Cart/>
  },
  {
    path: '/:admin',
    element:<Admin />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
