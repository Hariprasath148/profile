import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { projects } from '../objects/project';

export const ProjectsMore = () => {
    const params = useParams();
    const project_presents = projects.some(project => project.route === params.id);
    const project = projects.find(project => project.route === params.id);
    if(!project_presents) {
        return <div>error not found</div>;
    }
    return (
        <>
            <div className="row"></div>
        </>
    )
}
