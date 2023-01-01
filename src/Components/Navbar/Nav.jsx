import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <nav>
      <div className='nav_left'>
        PENAUTO
      </div>
      <div className='nav_right'>
        <div className='services_all'>
          <div className="service">
            <i class="fa-solid fa-phone"></i>
            <span className='service_text' >+769 586 4558</span>
          </div>
          <div className="service">
            <i class="fa-solid fa-envelope"></i>
            <span className='service_text' >service@openauto.ca</span>
          </div>
        </div>
          <button className='btn btn-outline-light rounded-pill download border-1 border' >
            Download the mobile app
          </button>
      </div>
    </nav>
  )
}

export default Nav