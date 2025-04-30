import React from 'react'
import "../style/about.css"
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa6";
import { FaWix } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiCanva } from "react-icons/si";
import { SiEclipseide } from "react-icons/si";

export const About = () => {
  return (
    <div className='about-container w-100 p-4'>
      <div className="heading-container about-heading d-flex justify-content-center align-content-center flex-column flex-wrap">
        <p className='display-5 heading-text m-0 text-center'>About</p>
        <hr className='hr heading-line m-0 rounded-pill border-0 opacity-100'/>
      </div>
      <div className="about-para row  justify-content-center">
        <div className="col-lg-8 p-0 pt-3 col-12">
          <p className='text-center text-white'>Hello! I'm Hari Prasath, a full-stack developer and web designer with a passion for building responsive, user-friendly websites. I work with technologies like HTML, CSS, JavaScript, Node.js, Express, MongoDB, Java, and Bootstrap to create clean and dynamic web applications.</p>
          <p className='text-center text-white'>I also have a strong sense of design, using tools like Figma and Wix Studio to bring ideas to life. My development workflow includes VS Code, Git, and GitHub to ensure efficiency and collaboration.</p>
          <p className='text-center text-white'>I'm always exploring new technologies and pushing my skills further. Whether it's coding or designing, I aim to deliver thoughtful, high-quality solutions. Let’s build something great together!</p>
        </div>
      </div>
      <div className="heading-container programming-heading d-flex justify-content-center align-content-center flex-column flex-wrap mt-2">
        <p className='display-5 heading-text m-0 text-center'>Programming Languages</p>
        <hr className='hr heading-line m-0 rounded-pill border-0 opacity-100 mt-2'/>
      </div>
      <div className="row mt-2 g-4">
        <div className="col-lg-3 col-md-4 col-12">
          <div className="container-fluid skill-box m-0 p-3 d-flex justify-content-center align-items-center flex-wrap flex-column rounded-4">
              <FaHtml5 className='skill-icon'/>
              <p className='h3 mt-2 text-center'>HTML</p>
              <p className='text-center'>Elements, Structure, Forms, Input, Links, Media, Embedding, Attributes</p>
              <hr className='progress-line opacity-100 border-0 rounded-pill mt-1 mb-0 w-100' style={{"--progress" : "95%"}}/>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12">
          <div className="container-fluid skill-box m-0 p-3 d-flex justify-content-center align-items-center flex-wrap flex-column rounded-4">
              <FaCss3Alt className='skill-icon'/>
              <p className='h3 mt-2 text-center'>CSS</p>
              <p className='text-center'>Flexbox , animations, responsive design</p>
              <hr className='progress-line opacity-100 border-0 rounded-pill mt-1 mb-0 w-100' style={{"--progress" : "90%"}}/>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12">
          <div className="container-fluid skill-box m-0 p-3 d-flex justify-content-center align-items-center flex-wrap flex-column rounded-4">
              <FaJsSquare className='skill-icon'/>
              <p className='h3 mt-2 text-center'>JS</p>
              <p className='text-center'>Variables and Data Types, Functions, Asynchronous JavaScript, This Keyword, Scope and Closures.</p>
              <hr className='progress-line opacity-100 border-0 rounded-pill mt-1 mb-0 w-100' style={{"--progress" : "60%"}}/>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12">
          <div className="container-fluid skill-box m-0 p-3 d-flex justify-content-center align-items-center flex-wrap flex-column rounded-4">
              <RiReactjsFill className='skill-icon'/>
              <p className='h3 mt-2 text-center'>ReactJS</p>
              <p className='text-center'>JSX, Components, State and Props, Lifecycle Methods, Hooks, Event Handling, React Router.</p>
              <hr className='progress-line opacity-100 border-0 rounded-pill mt-1 mb-0 w-100' style={{"--progress" : "40%"}}/>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12">
          <div className="container-fluid skill-box m-0 p-3 d-flex justify-content-center align-items-center flex-wrap flex-column rounded-4">
              <FaBootstrap className='skill-icon'/>
              <p className='h3 mt-2 text-center'>Bootstrap</p>
              <p className='text-center'>Grid System, Responsive Design, Typography, Components, Utilities, Forms, Customization.</p>
              <hr className='progress-line opacity-100 border-0 rounded-pill mt-1 mb-0 w-100' style={{"--progress" : "70%"}}/>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12">
          <div className="container-fluid skill-box m-0 p-3 d-flex justify-content-center align-items-center flex-wrap flex-column rounded-4">
              <FaJsSquare className='skill-icon'/>
              <p className='h3 mt-2 text-center'>Express</p>
              <p className='text-center'>Routing, Middleware, Request & Response Objects, Error Handling, Authentication, Template Engines.</p>
              <hr className='progress-line opacity-100 border-0 rounded-pill mt-1 mb-0 w-100' style={{"--progress" : "30%"}}/>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12">
          <div className="container-fluid skill-box m-0 p-3 d-flex justify-content-center align-items-center flex-wrap flex-column rounded-4">
              <FaNodeJs className='skill-icon'/>
              <p className='h3 mt-2 text-center'>NodeJS</p>
              <p className='text-center'>Callbacks, Promises, async/await, Modules, File System (fs), Express Integration, HTTP Module, Error Handling.</p>
              <hr className='progress-line opacity-100 border-0 rounded-pill mt-1 mb-0 w-100' style={{"--progress" : "40%"}}/>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12">
          <div className="container-fluid skill-box m-0 p-3 d-flex justify-content-center align-items-center flex-wrap flex-column rounded-4">
              <DiMongodb className='skill-icon'/>
              <p className='h3 mt-2 text-center'>MongoDB</p>
              <p className='text-center'>CRUD Operations, Collections and Documents, Data Modeling, Aggregation Framework, Mongoose, Validation.</p>
              <hr className='progress-line opacity-100 border-0 rounded-pill mt-1 mb-0 w-100' style={{"--progress" : "20%"}}/>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12">
          <div className="container-fluid skill-box m-0 p-3 d-flex justify-content-center align-items-center flex-wrap flex-column rounded-4">
              <FaJava className='skill-icon'/>
              <p className='h3 mt-2 text-center'>JAVA</p>
              <p className='text-center'>Classes, objects, Methods, Inheritance, Polymorphism, Exception Handling, Multithreading.</p>
              <hr className='progress-line opacity-100 border-0 rounded-pill mt-1 mb-0 w-100' style={{"--progress" : "50%"}}/>
          </div>
        </div>
      </div>
      <div className="heading-container d-flex justify-content-center align-content-center flex-column flex-wrap mt-4">
        <p className='display-5 heading-text m-0 text-center'>Other Skills and Tools</p>
        <hr className='hr heading-line m-0 rounded-pill border-0 opacity-100 mt-2'/>
      </div>
      <div className="row mt-2 g-4">
        <div className="col-lg-3 col-md-4 col-12">
          <div className="container-fluid skill-box m-0 p-3 d-flex justify-content-center align-items-center flex-wrap flex-column rounded-4">
              <FaFigma className='skill-icon'/>
              <p className='h3 mt-2 text-center'>Figma</p>
              <p className='text-center'>Frames and Layouts, Auto Layout, Prototyping and Interactions,Collaboration and Sharing.</p>
              <hr className='progress-line opacity-100 border-0 rounded-pill mt-1 mb-0 w-100' style={{"--progress" : "95%"}}/>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12">
          <div className="container-fluid skill-box m-0 p-3 d-flex justify-content-center align-items-center flex-wrap flex-column rounded-4">
              <FaWix className='skill-icon'/>
              <p className='h3 mt-2 text-center'>WIX</p>
              <p className='text-center'>Drag-and-Drop Editor, Templates and Themes,Artificial Design Intelligence, Responsive Design.</p>
              <hr className='progress-line opacity-100 border-0 rounded-pill mt-1 mb-0 w-100' style={{"--progress" : "90%"}}/>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12">
          <div className="container-fluid skill-box m-0 p-3 d-flex justify-content-center align-items-center flex-wrap flex-column rounded-4">
              <FaGithub className='skill-icon'/>
              <p className='h3 mt-2 text-center'>Git / Github</p>
              <p className='text-center'>Repositories, Commits and Version Control, Branching and Merging, Pull Requests, Collaboration.</p>
              <hr className='progress-line opacity-100 border-0 rounded-pill mt-1 mb-0 w-100' style={{"--progress" : "60%"}}/>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12">
          <div className="container-fluid skill-box m-0 p-3 d-flex justify-content-center align-items-center flex-wrap flex-column rounded-4">
              <VscVscode className='skill-icon'/>
              <p className='h3 mt-2 text-center'>VS code</p>
              <p className='text-center'>Proficient in using VS Code efficiently.</p>
              <hr className='progress-line opacity-100 border-0 rounded-pill mt-1 mb-0 w-100' style={{"--progress" : "40%"}}/>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12">
          <div className="container-fluid skill-box m-0 p-3 d-flex justify-content-center align-items-center flex-wrap flex-column rounded-4">
              <SiCanva className='skill-icon'/>
              <p className='h3 mt-2 text-center'>Canva</p>
              <p className='text-center'>Skilled in designing efficiently using Canva.</p>
              <hr className='progress-line opacity-100 border-0 rounded-pill mt-1 mb-0 w-100' style={{"--progress" : "70%"}}/>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-12">
          <div className="container-fluid skill-box m-0 p-3 d-flex justify-content-center align-items-center flex-wrap flex-column rounded-4">
              <SiEclipseide className='skill-icon'/>
              <p className='h3 mt-2 text-center'>Eclipse</p>
              <p className='text-center'>Proficient in developing using Eclipse IDE efficiently.</p>
              <hr className='progress-line opacity-100 border-0 rounded-pill mt-1 mb-0 w-100' style={{"--progress" : "70%"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}
