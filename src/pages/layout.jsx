import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './auth/Navbar'
import NestedNavbar from './NestedNavbar'
export default function Layout() {
  return (
    <> 
    <NavBar username="John Doe" />
    <NestedNavbar />
    <Outlet />
    <h2>welcome to the app</h2>
    </>
   
  )
}
