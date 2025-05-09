import { useState } from 'react'
import "../style/home.css"
import { NavLink } from "react-router-dom"
import cover from "../assets/images/projectCover2.png"
import mypic from "../assets/images/mypic.png"
import { FaLinkedinIn , FaInstagram , FaTwitter , FaGithub  } from "react-icons/fa";
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
import { VscVscode } from "react-icons/vsc";
import { SiCanva } from "react-icons/si";
import { SiEclipseide } from "react-icons/si";
import { FaPython } from "react-icons/fa";


export const Home = ()=>{

    const [state,setState] = useState(true);
    const reveal = ()=> {
    document.querySelector(".reveal-container").classList.toggle("active");
    setTimeout(() => {
      setState(false)
    }, 1000);
    }

    if(state) {
        return ( <div className="reveal-container d-flex overflow-hidden justify-content-center flex-wrap align-content-center p-3">
                    <div className='w-100 h-100 reveal-container-inside d-flex justify-content-center flex-wrap align-items-center rounded-4 flex-column'>
                        <p className='display-3' id='load-head'>Hey What's up</p>
                        <p className='mt-1 text-center' id='load-text'>Click the button below to know about me.</p>
                        <button id="reveal-btn" className='py-3 px-5 rounded-pill mt-3' onClick={reveal}>open</button>
                    </div>
                </div> );
    }

    return (
        <>
           <div className="home-container w-100 p-lg-4 p-2">
                <div className="first-container row justify-content-between g-4 w-100">
                     <div className="image-container-mobile">
                        <img src={mypic} alt="" className="w-100 h-100" id="mypic"/>
                    </div>
                    <div className="col-lg-5 col-12 title-container m-0 p-0 d-flex justify-content-center flex-column">
                        <h1 className="text-white mt-3 mb-0 display-2" id="name">HARI PRASATH J</h1>
                        <p className="text-white h5 mt-1" id="known-tags">Full Stack Developer | Problem Slover | Creative Thinker | Web Desingner</p>
                        <div className="d-flex flex-row gap-4 mt-2">
                            <NavLink className="btn px-sm-5 py-sm-3 px-3 py-2 rounded-pill border-0" id="about-me-btn" to="/about">About me</NavLink>
                            <NavLink className="btn px-sm-5 py-sm-3 px-3 py-2 rounded-pill border-0" id="download-btn">Download Resume</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-3 me-xl-5 me-2 col-12 p-3 rounded-4 bg-white position-relative" id="project-container">
                        <div className="w-100 overflow-hidden rounded-4" id="project-img"><img src={cover} alt="" className="w-100 h-100"/></div>
                        <p className="mt-1 ms-2 h3 mb-0" id="project-tag">Projects</p>
                        <p className="mt-1 ms-2 mb-1" id="project-para">My first project with fresh knowlege in the web development</p>
                        <NavLink className="text-decoration-underline ms-2 mb-0 text-black" to="/about">Know more</NavLink>
                        <NavLink className="btn m-2 ps-1 pb-1 pe-0 pt-0 d-flex justify-content-center align-items-center" id="linkedin-btn" to="/about"><FaGithub id="linkedin-logo"/></NavLink>
                    </div>
                </div>
                <div className="image-container">
                    <img src={mypic} alt="" className="w-100 h-100" id="mypic"/>
                </div>
                <div className="second-container row justify-content-between w-100 me-xl-5 pb-3 gap-4">
                    <div className="col-lg-7 col-12 link-container p-0 d-flex gap-3 justify-content-start align-items-end mt-4">
                        <div className="social-icon rounded-pill d-flex justify-content-center align-items-center"><a className="text-white" href="https://www.linkedin.com/in/hari-prasath-j-238776291/" target="_blank"><FaLinkedinIn /></a></div>
                        <div className="social-icon rounded-pill d-flex justify-content-center align-items-center"><a className="text-white" href="https://github.com/Hariprasath148" target="_blank"><FaGithub /></a></div>
                        <div className="social-icon rounded-pill d-flex justify-content-center align-items-center"><a className="text-white" href="https://www.instagram.com/_.hari.prasath._/" target="_blank"><FaInstagram /></a></div>
                        <div className="social-icon rounded-pill d-flex justify-content-center align-items-center"><a className="text-white" href="https://x.com/janhhari" target="_blank"><FaTwitter /></a></div>
                    </div>
                    <div className="col-lg-4 col-12 skill-container m-lg-4 m-0 p-3 rounded-4">
                        <p className="mt-1 ms-2 mb-0" id="skill-tag">10+ Skills</p>
                        <p className="mt-1 ms-2 mb-1 text-white" id="skil-para">I am the Skills in the more than 10 programming languages and tha 5 plus software knowledge.</p>
                        <div className="scroll-bar py-2">
                            <div className="logo-wrapper">
                                <FaHtml5 className="scroll-logo" style={{"--i" : "1"}}/>
                                <FaCss3Alt className="scroll-logo" style={{"--i" : "2"}}/>
                                <FaJsSquare className="scroll-logo" style={{"--i" : "3"}}/>
                                <RiReactjsFill className="scroll-logo" style={{"--i" : "4"}}/>
                                <FaBootstrap className="scroll-logo" style={{"--i" : "5"}}/>
                                <DiMongodb className="scroll-logo" style={{"--i" : "6"}}/>
                                <FaNodeJs className="scroll-logo" style={{"--i" : "7"}}/>
                                <FaJava className="scroll-logo" style={{"--i" : "8"}}/>
                                <FaFigma className="scroll-logo" style={{"--i" : "9"}}/>
                                <FaWix className="scroll-logo" style={{"--i" : "10"}}/>
                                <FaGithub className="scroll-logo" style={{"--i" : "11"}}/>
                                <VscVscode className="scroll-logo" style={{"--i" : "12"}}/>
                                <SiCanva className="scroll-logo" style={{"--i" : "13"}}/>
                                <SiEclipseide className="scroll-logo" style={{"--i" : "14"}}/>
                                <FaPython className="scroll-logo" style={{"--i" : "15"}}/>
                            </div>
                        </div>
                        <NavLink className="text-decoration-underline ms-2 mb-0 text-black text-white" to="/about">Know more</NavLink>
                    </div>
                </div>
           </div>
        </>
    )
}