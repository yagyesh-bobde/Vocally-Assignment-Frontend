import React from 'react'
import MainFooter from '../Footer/MainFooter'
import Register from '../Forms/Register'
import './home.css'


const Main = () => {
  return (
    <div className="main_page">
        <div className="home_section">
            <div className="main_left_side">
                <span className='main_heading w-75'>
                    Vehicle Maintenance From The Comfort Of Your Home
                </span>
                <span className='main_subheading' >
                    Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry-free.
                </span>
                <Register />
            </div>
            <div className="main_right_side">
                  <img className="main_img" src="/images/map.png" alt="" width={650}  />
            </div>
        </div>
        <MainFooter />
    </div>
  )
}

export default Main