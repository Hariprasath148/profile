import React from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/index.css"
import { Navbar } from '../components/Navbar';

export const Main_layout = () => {
  return (
    <>
        <div className='vh-100 vw-100 overflow-auto p-3'>
            <div className='root-container w-100 h-100 rounded-4'>
                <Navbar/>
                <div className='main-outlet-container'>
                    <Outlet/>
                </div>
            </div>
        </div>
    </>
  )
}
