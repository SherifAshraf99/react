import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header'
import Protfolio from './Components/Protfolio/Protfolio';
import Layout from './Components/Layout';

let routers = createBrowserRouter([
  {
    path:"/",element: <Layout/>, children : [
    {path:"/",element: <Header/>},
    {path:"Protfolio",element: <Protfolio/>},
    {path:"About",element: <About/>},
    {path:"Contact",element: <Contact/>},
    {path:"*",element:<Header/>},
  ]
}
])
export default function App() {
  
  return (
   <>
   <RouterProvider router = {routers}></RouterProvider>
  
   </>
  )
}
