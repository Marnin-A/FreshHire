import React from 'react'
import "./AboutUsSection.css"
import jobsFrame from "../../assets/jobsFrame.png";

const AboutUsSection = () => {
  return (
    <div className="aboutUs__container">
      <div className='aboutUs'>
        <div className="aboutUs__left">
        <p className='aboutUs__title'>About Fresh Hire</p>
          <img src={jobsFrame} alt="personal Data" />
        </div>
        <div className="aboutUs__right">
          <div className="aboutUs__right__content">
          <h3>Welcome to Fresh Hire</h3>
          <p>The job platform designed specifically for fresh graduates and employers seeking to connect with them. We understand that finding a job after graduation can be challenging, which is why we've created a platform that helps bridge the gap between job seekers and potential employers.</p>
          <p>For job seekers, Fresh Hire offers an easy-to-use platform to search for job opportunities based on their qualifications, experience, and interests. We work with top employers in a variety of industries to bring you the latest job openings, internships, and entry-level positions. Our job search tool is designed to make the job hunting process efficient and stress-free.</p>
          <button>Explore More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection