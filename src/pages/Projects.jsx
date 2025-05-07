import React from 'react'
import pic from "../assets/project/1.png"
import "../style/project.css"
import {projects} from "../objects/project.js"
import { NavLink } from 'react-router-dom'

export const Projects = () => {
  return (
    <>
      {
        projects.map((project)=> (
          <div className="row project-section" key={project.name} >
            <div className="col-lg-6 col-12 project-discription p-lg-5 p-4 d-flex flex-column justify-content-center">
              <p className='display-6 mb-1 project-name'>{project.name}</p>
              <p className='project-discription-para'>{project.short_discription}</p>
              <div className='project-tech-stack d-flex flex-wrap gap-2 mb-3'>
                {
                  Object.keys(project.tech).map((language)=> (
                    <p className='px-3 py-2 rounded-2 project-tech-tag m-0' key={language} >{language}</p>
                  ))
                }
              </div>
              <div className='project-button-container mt-2 d-flex flex-wrap gap-3'>
                <a href={project.siteLink} target='blank' className='px-3 py-2 text-decoration-none rounded-2 project-navigate-buttons project-navigate-buttons-visit'>Visit Site</a>
                <NavLink to={`/projects/${project.route}`} className='px-3 py-2 text-decoration-none rounded-2 project-navigate-buttons project-navigate-buttons-more'>Know More</NavLink>
                <a href={project.codeLink} target='blank' className='px-3 py-2 text-decoration-none rounded-2 project-navigate-buttons project-navigate-buttons-code'>View Code</a>
              </div>
            </div>
            <div className="col-lg-6 col-12 position-relative project-photo d-flex align-items-center justify-content-center">
                <img src={project.img} alt="" className='project-img' />
                <div className="position-absolute w-100 h-100 project-img-shadhow"></div>
                <div className="position-absolute project-img-center-line"></div>
                <div className="position-absolute project-img-side-line"></div>
                <div className="position-absolute project-img-side-Diamond"></div>
            </div>
          </div>
        ))
      }
    </>
  )
}
