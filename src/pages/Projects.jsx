import React, { useEffect } from 'react'
import pic from "../assets/project/1.png"
import "../style/project.css"
import {projects} from "../objects/project.js"
import { NavLink } from 'react-router-dom'

export const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Hari Prasath";
  }, []);
  const [selectedCategory , SetSelectedCategory] = useState("All");
  const allCategories = Array.from(
  new Set(projects.map(project => project.category))
  );
  const filteredCategory = selectedCategory === "All" ? projects : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <div className="project-hero-container">
        <div className="d-flex justify-content-center align-content-center flex-column flex-wrap">
        <p className='display-5 heading-text m-0 mb-2 text-center'>Projects</p>
        <hr className='hr heading-line m-0 rounded-pill border-0 opacity-100'/>
        </div>
        <div className="row  justify-content-center">
          <div className="col-lg-8 p-0 pt-3 px-lg-0 px-1 col-12">
            <p className='text-center text-white'>Here’s a collection of my projects that demonstrate my expertise in full-stack development, showcasing strong skills in both frontend design and backend architecture.</p>
          </div>
        </div>
        <div className="row  justify-content-center pt-0 mb-4">
          <div className="col-lg-6 col-12 p-0 d-flex gap-3 justify-content-center flex-wrap">
            {
              ["All",...allCategories].map(category=>(
                <button key={category} className={`category-btn rounded-2 px-3 py-2 text-nowrap ${category===selectedCategory?"active":""}`} onClick={()=>SetSelectedCategory(category)}>{category}</button>
              ))
            }
          </div>
        </div>
      </div>
      <div className="project-section-container">
        {
          filteredCategory.map((project)=> (
            <div className="row project-section" key={project.name} >
              <div className="col-lg-6 col-12 project-discription p-lg-5 p-3 d-flex flex-column justify-content-center">
                <p className='display-6 mb-1 project-name'>{project.name}</p>
                <p className='project-discription-para'>{project.short_discription}</p>
                <div className='project-tech-stack d-flex flex-wrap gap-2 mb-3'>
                  {
                    Object.keys(project.tech).map((language)=> (
                      <p className='px-3 py-2 rounded-2 project-tech-tag m-0' key={language} >{language}</p>
                    ))
                  }
                </div>
                <div className='project-button-container mt-2 d-flex flex-wrap gap-2'>
                  <a href={project.siteLink} target='blank' className='px-3 py-2 text-decoration-none rounded-2 project-navigate-buttons project-navigate-buttons-visit'>Visit Site</a>
                  <NavLink to={`/projects/${project.route}`} className='px-3 py-2 text-decoration-none rounded-2 project-navigate-buttons project-navigate-buttons-more'>Know More</NavLink>
                  {
                    project.codeLink && <a href={project.codeLink} target='blank' className='px-3 py-2 text-decoration-none rounded-2 project-navigate-buttons project-navigate-buttons-code'>View Code</a>
                  }
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
      </div>
    </>
  )
}
