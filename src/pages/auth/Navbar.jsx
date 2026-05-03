import React from 'react'
import styles from "./LoginPage.module.css";

import { Calendar } from "lucide-react";
export default function Navbar({ username = "John Doe" }) {
    return (
      

        <nav className="navbar navbar-light bg-light shadow-sm">
  <a className="navbar-brand">
       <div className="d-flex  align-items-center">
                <div className={styles.icon} >
                    <Calendar size={40} />

                </div>
                 <span >Leave Management</span>
            </div>
  </a>
  <form className="form-inline">
     <span className='p-3'><i className="fa-solid fa-user " ></i> {username}</span>
                <span className='p-3'><i className="fa-sharp fa-solid fa-arrow-right-to-bracket" ></i> Logout</span>
  </form>
</nav>
    )
}
