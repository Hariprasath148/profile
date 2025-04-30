import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/index.css"
import { Navbar } from '../components/Navbar';

export const Main_layout = () => {

  const [state,setState] = useState(true);
  const reveal = ()=> {
    document.querySelector(".reveal-container").classList.toggle("active");
    setTimeout(() => {
      setState(false)
    }, 1000);
  }
  return (
    <>
        <div className='vh-100 vw-100 p-3'>
            <div className='root-container overflow-auto w-100 h-100 rounded-4'>
              { state ? 
                <div className="reveal-container d-flex overflow-hidden justify-content-center flex-wrap align-content-center">
                  <button id="reveal-btn" className='p-5 border-0 rounded-pill' onClick={reveal}>open</button>
                </div> :
                <>
                  <Navbar/>
                    <div className='main-outlet-container p-3'>
                      <Outlet/>
                    </div>
                 </>
              }
            </div>
          
        </div>
    </>
  )
}
