import React from 'react'
import Socials from './Socials'
import './footer.css'


const AboutFooter = () => {
  return (
    <div className='about_footer'>
        <section className="footer_section_one">
          <p>PENAUTO</p>
        <div className='services_all phone_services'>
            <div className="service">
              <i class="fa-solid fa-phone"></i>
              <span className='service_text' >+769 586 4558</span>
            </div>
            <div className="service">
              <i class="fa-solid fa-envelope"></i>
              <span className='service_text' >service@openauto.ca</span>
            </div>
          </div>
        </section>
        <section className="footer_section_two">
          <p>Open Auto @all rights resserved</p>
          <div className="phone_about_extra service">
            <p>Privacy policy</p>
            <p>Terms of use</p>
            <p>Cookie policy</p>
          </div>
          <div className="socials_div all_socials phone_full" >
            <i className="fa fa-brands fa-facebook"></i>
            <i className="fa fa-brands fa-twitter"></i>
            <i className="fa fa-brands fa-youtube"></i>
            <i className="fa fa-brands fa-linkedin"></i>
            <i className="fa fa-brands fa-instagram"></i>
          </div>

        </section>
    </div>
  )
}

export default AboutFooter