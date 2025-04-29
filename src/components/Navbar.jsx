import React from 'react'
import "../style/navbar.css"
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

  const openNav = ()=>{
    document.querySelector(".mobile-nav").classList.toggle("active");
    document.querySelector(".hamburger").classList.toggle("active");
  }

  return (
    <>
        <div className="navbar-container d-flex justify-content-center">
            <div className='navbar p-3 px-5 d-flex gap-5 bg-white'>
                <p className='m-0'><NavLink to="/" className={({isActive})=>(isActive ? "text-decoration-none nav-link active": "text-decoration-none nav-link")}>Home</NavLink></p>
                <p className='m-0'><NavLink to="/projects" className={({isActive})=>(isActive ? "text-decoration-none nav-link active": "text-decoration-none nav-link")}>Projects</NavLink></p>
                <p className='m-0'><NavLink to="/about" className={({isActive})=>(isActive ? "text-decoration-none nav-link active": "text-decoration-none nav-link")}>About</NavLink></p>
                <p className='m-0'><NavLink to="/contact" className={({isActive})=>(isActive ? "text-decoration-none nav-link active": "text-decoration-none nav-link")}>Contact</NavLink></p>
            </div>
            <div className='mobile-nav d-flex flex-column justify-content-center align-items-center'>
              <div className='mobile-nav-link-container w-100 d-flex flex-column gap-3 p-3 px-5'>
                  <p className='m-0'><NavLink to="/" className={({isActive})=>(isActive ? "text-decoration-none text-center nav-link active": "text-decoration-none text-center nav-link")}>Home</NavLink></p>
                  <p className='m-0'><NavLink to="/projects" className={({isActive})=>(isActive ? "text-decoration-none text-center nav-link active": "text-decoration-none text-center nav-link")}>Projects</NavLink></p>
                  <p className='m-0'><NavLink to="/about" className={({isActive})=>(isActive ? "text-decoration-none text-center nav-link active": "text-decoration-none text-center nav-link")}>About</NavLink></p>
                  <p className='m-0'><NavLink to="/contact" className={({isActive})=>(isActive ? "text-decoration-none text-center nav-link active": "text-decoration-none text-center nav-link")}>Contact</NavLink></p>
              </div>
              <div className="hamburger d-flex flex-column justify-content-center align-content-center p-3 pt-1 pb-3" onClick={openNav}>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
              </div>
            </div>
        </div>
    </>
  )
  // <div className='hamburger d-flex flex-column'>
  //                 <div className='hamburger-line'></div>
  //                 <div className='hamburger-line'></div>
  //                 <div className='hamburger-line'></div>
  //               </div>
}
