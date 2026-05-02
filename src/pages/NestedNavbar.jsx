import React from 'react'
import { Link } from 'react-router-dom'
export default function NestedNavbar() {
  return (
    <>
    <nav className="nav nav-pills nav-fill mx-5 ">
  <Link className="nav-item nav-link  bg-secondary text-white border  active" to="#">
<i class="fa-solid fa-calendar" ></i> Dashboard
  </Link>
  <Link className="nav-item nav-link bg-secondary text-dark border " to="#">
    <i class="fa-solid fa-plus" ></i> Apply
  </Link>
  <Link className="nav-item nav-link bg-secondary text-dark border " to="#">
    <i class="fa-solid fa-clock-rotate-left" ></i> My Leave 
  </Link>
  <Link className="nav-item nav-link bg-secondary text-dark   " to="#">
    <i class="fa-solid fa-file" ></i>
    Balance
  </Link>
</nav>
    </>
  )
}
