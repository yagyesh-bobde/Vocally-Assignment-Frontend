import React from 'react'

const SubmitSuccess = () => {
  console.log('success')
  return (
    <div style={{ height: '100vh', zIndex: 999, width: '100%', display: 'grid', placeItems: 'center', position: 'absolute', top: '0', backdropFilter: 'blur(5px)' }}>
      <div className="main_modal w-50 p-5" style={{ marginLeft: '-250px', color: 'white', backgroundColor: '#121821', borderRadius : '15px'}} >
        <center>
        <h2>Thank You For Registering with Us!</h2>
        <img style={{ borderRadius: '50%'}} src="https://media.tenor.com/0AVbKGY_MxMAAAAC/check-mark-verified.gif" width='175' alt="" />
        </center>
      </div>
    </div>
  )
}

export default SubmitSuccess