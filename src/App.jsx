import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'



import {createBrowserRouter} from "react-router-dom"
import { RouterProvider } from 'react-router-dom'
import Layout from './pages/layout'

function App() {
 const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children :[{
      path:"/",
      element:<Home/>
    },
  ]
  }
 ])

  return (
  <>
   <RouterProvider router={router}/>
  </>
  )
}

export default App
