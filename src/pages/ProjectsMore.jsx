import React, { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { projects } from '../objects/project';
import "../style/projectmore.css"
import "../style/project.css"

export const ProjectsMore = () => {
    const params = useParams();
    const project_presents = projects.some(project => project.route === params.id);
    const project = projects.find(project => project.route === params.id);
    useEffect(() => {
      document.querySelector('.root-container')?.scrollTo(0, 0);
    }, []);
    if(!project_presents) {
        return <div>error not found</div>;
    }
    return (
        <>
            <div className="row px-lg-5 px-1">
                <div className="col-lg-4 col-12">
                    <div className="heroImg-container w-80 p-2 bg-light rounded-3">
                        <img className='heroImg w-100 height-100 rounded-3' src={project.HeroImg} alt="" />
                    </div>
                </div>
                <div className="col-lg-8 col-12 p-lg-4 ps-lg-5 p-3">
                    <div className="project-hero-name display-4">{project.name}</div>
                    <div className="project-hero-long-discription mt-2">{project.long_discription}</div>
                    <div className='project-hero-button-container mt-3 d-flex flex-wrap gap-3'>
                        <a href={project.siteLink} target='blank' className='px-3 py-2 text-decoration-none rounded-2 project-hero-buttons project-hero-buttons-visit'>Visit Site</a>
                        {
                            project.codeLink && <a href={project.codeLink} target='blank' className='px-3 py-2 text-decoration-none rounded-2 project-navigate-buttons project-navigate-buttons-code'>View Code</a>
                        }
                    </div>
                    <div className="tech-container bg-light mt-4 rounded-4 p-4">
                        <div className="project-tech-name">Technology Used</div>
                        {
                            Object.entries(project.tech).map(([Key,value]) => (
                                <div className="row mt-3" key={Key}>
                                    <div className="project-tech col-lg-3 col-12 ps-lg-4 ps-2">{Key}</div>
                                    <div className="project-tech-discription col-lg-9 col-12 mt-lg-0 mt-2">{value}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="project-skill-container bg-light mt-4 rounded-4 p-4">
                        <div className="project-keyPoint-name">Key Points</div>
                        <ul className='mt-3 mb-0'>
                            {project.keyPoints.map((keyPoint,index)=> (
                                <li className="mt-3" key={index}>{keyPoint}</li>
                            ))
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}
