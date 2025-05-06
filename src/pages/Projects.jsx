import React from 'react'
import pic from "../assets/project/1.png"
import "../style/project.css"

export const Projects = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-12 project-discription"></div>
        <div className="col-lg-6 col-12 position-relative project-photo d-flex align-items-center justify-content-center">
            <img src={pic} alt="" className='project-img' />
            <div className="position-absolute w-100 h-100 project-img-shadhow"></div>
        </div>
      </div>
    </>
  )
}
