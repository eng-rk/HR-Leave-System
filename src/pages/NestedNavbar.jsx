import React from 'react'
import { Link } from 'react-router-dom'
export default function NestedNavbar() {
  return (
    <>
    <nav className="nav nav-pills  mx-5  d-flex justify-content-center flex-nowrap my-3">
  <Link className="nav-item nav-link  bg-secondary text-white border border-radius  active flex-shrink-0  nav-hover" to="#">
<i class="fa-solid fa-calendar" ></i> Dashboard
  </Link>
  <Link className="nav-item nav-link bg-secondary text-dark border border-radius flex-shrink-0  nav-hover" to="/form">
    <i class="fa-solid fa-plus" ></i> Apply
  </Link>
  <Link className="nav-item nav-link bg-secondary text-dark border border-radius flex-shrink-0  nav-hover" to="#">
    <i class="fa-solid fa-clock-rotate-left" ></i> My Leave 
  </Link>
  <Link className="nav-item nav-link bg-secondary text-dark border border-radius flex-shrink-0  nav-hover" to="#">
    <i className="fa-solid fa-file" ></i>
    Balance
  </Link>
</nav>
    </>
  )
}
