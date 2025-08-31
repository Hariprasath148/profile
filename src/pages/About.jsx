import { useEffect } from 'react'
import "../style/about.css"
import {skills} from "../objects/skills.js"

export const About = () => {
  
  useEffect(() => {
   document.title = "About | Hari Prasath";
  }, []);

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
        {
          skills.techStack.map((skill)=>{
            const Icon = skill.icon;
            return(
              <div className="col-lg-3 col-md-4 col-12" key={skill.name}>
                <div className="container-fluid skill-box m-0 p-3 d-flex justify-content-center align-items-center flex-wrap flex-column rounded-4">
                  <Icon className='skill-icon'/>
                  <p className='h3 mt-2 text-center'>{skill.name}</p>
                  <p className='text-center'>{skill.known}</p>
                  <hr className='progress-line opacity-100 border-0 rounded-pill mt-1 mb-0 w-100' style={{"--progress" : skill.progress }}/>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="heading-container d-flex justify-content-center align-content-center flex-column flex-wrap mt-4">
        <p className='display-5 heading-text m-0 text-center'>Other Skills and Tools</p>
        <hr className='hr heading-line m-0 rounded-pill border-0 opacity-100 mt-2'/>
      </div>
      <div className="row mt-2 g-4">
        {
            skills.otherTools.map((skill)=>{
              const Icon = skill.icon;
              return(
                <div className="col-lg-3 col-md-4 col-12" key={skill.name}>
                  <div className="container-fluid skill-box m-0 p-3 d-flex justify-content-center align-items-center flex-wrap flex-column rounded-4">
                    <Icon className='skill-icon'/>
                    <p className='h3 mt-2 text-center'>{skill.name}</p>
                    <p className='text-center'>{skill.known}</p>
                    <hr className='progress-line opacity-100 border-0 rounded-pill mt-1 mb-0 w-100' style={{"--progress" : skill.progress }}/>
                  </div>
                </div>
              )
            })
        }
      </div>
    </div>
  )
}
