import React from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/index.css"
import { Navbar } from '../components/Navbar';

export const Main_layout = () => {

  return (
    <>
        <div className='vw-100 p-lg-3 p-2' id="root-container-wrapper">
            <div className='root-container overflow-auto w-100 h-100 rounded-4'>
                <>
                  <Navbar/>
                    <div className='main-outlet-container p-3'>
                      <Outlet/>
                    </div>
                </>
            </div>
        </div>
    </>
  )
}
