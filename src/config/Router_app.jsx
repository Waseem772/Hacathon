import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../component/layout'
import { LogIn } from '../pages/LogIn'
// import { Navbar2 } from '../component/Navbar2'


const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path="" element={<Layout />}>
      // <Route path="" element={<LogIn />} >
      // <Route path="" element={<Navbar2 />} />
<Route>

      <Route path="" element={<h1> hello World </h1>} />

    </Route >
  )
)


export const Router_app = () => {
  return (
    <RouterProvider router={router} />
  )
}
