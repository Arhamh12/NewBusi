import React from "react"
import { Link, Outlet } from "react-router-dom"
import './nav.css'
import logo from './logo.png'
import { useTheme } from "./ThemeContext";

export default function Nav(){

    const { darkMode, toggleDarkMode } = useTheme();
    return (<>
        <nav>
            <img src={logo} alt="" className="logo" />
            <div className="MainNav">
                    <div className="menues">
                         <Link to="/Home" style={{ textDecoration: 'none' }}>
                            Home
                        </Link>
                    </div>
                    <div className="menues">
                        <Link to="/AboutUs" style={{ textDecoration: 'none' }}>
                            About us
                        </Link>
                    </div>
                    <div className="menues">
                        <Link to="/Service" style={{ textDecoration: 'none' }}>
                            Services
                        </Link>
                    </div>
                    <div className="menues">
                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            Contact us
                        </Link>
                    </div>
            </div>
            <div className="Theme">
            <button onClick={toggleDarkMode}>
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
            </div>
            <div className="order">
                <button>Order Now!</button>
            </div>
           
        </nav> 
        <hr />
    </>)
}