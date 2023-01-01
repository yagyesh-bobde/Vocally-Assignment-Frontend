import React from 'react'
import MainFooter from '../Footer/MainFooter'
import Register from '../Forms/Register'
import AboutFooter from '../Footer/AboutFooter'
import './About.css'


const About = () => {
  return (
    <div className="about_page full_page">
      <div className="home_section_about">
        <div className="about_left_side">
          <img className="page_img" src="/images/Phone.svg" alt=""  />
        </div>
        <div className="about_right_side">
          <span className='about_heading'>
            Focused on Time Saving
          </span>
          <span className='about_subheading' >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quibusdam corrupti, tenetur magnam repudiandae illum et ducimus, quae officia asperiores distinctio quasi consequatur necessitatibus? Non, voluptatibus, corporis est nobis assumenda a beatae eos repudiandae consequuntur facilis atque cupiditate id deleniti!
          </span>
          <button className='btn btn-outline-light rounded-pill download border-1 border w-50' >
            Download the mobile app
          </button>
        </div>
        
      </div>
      <AboutFooter />
    </div>
  )
}

export default About