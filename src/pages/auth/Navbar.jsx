import React from 'react'
import styles from "./LoginPage.module.css";
import { Link } from 'react-router-dom';
import { Calendar } from "lucide-react";




import { NavLink } from "react-router-dom";
export default function NavBar({ username = "John Doe" }) {
    return (
        <>

            

            <div className='d-flex justify-content-between navbar navbar-light bg-light shadow-sm'>
    
                <div className=''>
                    <div className="d-flex  align-items-center ">
                        <div className={styles.icon2} >
                            <Calendar size={20} />

                        </div>
                        <span >Leave Management</span>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <Link className='p-3 text-decoration-none text-dark' to="/profile"><i className="fa-solid fa-user " ></i> {username}</Link>
                    <Link className='p-3 text-decoration-none text-dark' to="/home" onclick=""><i className="fa-sharp fa-solid fa-arrow-right-to-bracket" ></i> Logout</Link>
                </div>
            </div>

        </>
    )
}
