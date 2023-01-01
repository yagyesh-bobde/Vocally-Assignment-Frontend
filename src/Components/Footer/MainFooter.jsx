import React from 'react'
import Socials from './Socials'
import './footer.css'


const MainFooter = () => {
  return (
    <div className='main_footer'>
      <p className='main_footer_logo' >Logo</p>
      <div className="socials_div all_socials" >
        <i className="fa fa-brands fa-facebook"></i>
        <i className="fa fa-brands fa-twitter"></i>
        <i className="fa fa-brands fa-youtube"></i>
        <i className="fa fa-brands fa-linkedin"></i>
        <i className="fa fa-brands fa-instagram"></i>
      </div>
    </div>
  )
}

export default MainFooter