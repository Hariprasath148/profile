import React from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/index.css"
import { Navbar } from '../components/Navbar';
import { Toaster } from "react-hot-toast";

export const Main_layout = () => {

  return (
    <>
        <div className='vw-100 p-lg-3 p-2' id="root-container-wrapper">
            <div className='root-container overflow-auto w-100 h-100 rounded-4'>
                <>
                  <Navbar/>
                  <div className='main-outlet-container p-xl-3 p-2'>
                    <Outlet/>
                  </div>
                  <Toaster position="top-center" reverseOrder={false} />
                </>
            </div>
        </div>
    </>
  )
}
