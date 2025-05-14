import React from 'react'
import { IoMdMailOpen } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdContactPage } from "react-icons/md";
import "../style/contact.css"

export const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="row">
        <div className='col-lg-6 col-12 p-lg-5 p-2 d-flex justify-content-center align-items-center flex-column contact-form-container'>
            <div className="row w-100">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <IoMdMailOpen className="contact-icons" />
              </div>
              <div className="col-10">
                <p className='contact-tag text-white mb-2'>Email</p>
                <p className='contact-discription text-white mt-0'>janhhari@gmail.com</p>
              </div>
            </div>
            <div className="row w-100">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <FaPhoneAlt className="contact-icons" />
              </div>
              <div className="col-10">
                <p className='contact-tag text-white mb-2'>phone</p>
                <p className='contact-discription text-white mt-0'>+91 9150112183</p>
              </div>
            </div>
            <div className="row w-100">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <IoLocation className="contact-icons" />
              </div>
              <div className="col-10">
                <p className='contact-tag text-white mb-2'>Location</p>
                <p className='contact-discription text-white mt-0'>Chennai-14,Tamil Nadu,Chennai</p>
              </div>
            </div>
            <div className="row w-100">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <MdContactPage className="contact-icons" />
              </div>
              <div className="col-10">
                <p className='contact-tag text-white mb-2'>Resume</p>
                <p className='contact-discription text-white mt-0'><a href='/Resume.pdf' download className='text-decoration-none text-white'>Dowload Resume</a></p>
              </div>
            </div>
        </div>
        <div className='col-lg-6 col-12 p-lg-5 pt-lg-4 p-2 contact-details-container'>
            <div className="form-container bg-white p-4 rounded-4">
              <form action="#">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text"  className='form-control mt-2 p-2' id='name' aria-describedby='namehelp'/>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="email">Email Address</label>
                  <input type="email"  className='form-control mt-2 p-2' id='email' aria-describedby='emailhelp'/>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="subject">Subject</label>
                  <input type="text"  className='form-control mt-2 p-2' id='subject' aria-describedby='subjecthelp'/>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="message">Subject</label>
                  <textarea className='form-control mt-2 p-2' id='message' rows="3" aria-describedby='subjecthelp'/>
                </div>
                <div className="form-group mt-4">
                  <button className='w-100 border-0 submit-buton rounded-pill py-3 mt-2 text-white' id='message' rows="6" aria-describedby='subjecthelp'>Submit</button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}
