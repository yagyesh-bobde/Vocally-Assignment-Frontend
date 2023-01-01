import React, { useState } from 'react'
import { useContext } from 'react'
import { modalContext } from '../../Context/modals'
import {BACKEND_URL} from '../../Data/constants.js'
import './Forms.css'


const Register = () => {
  const { showSubmitModal } = useContext(modalContext)
  const [formData, setformData] = useState({
    name: '',
    email: ''
  })
  const [formErrors, setformErrors] = useState({})
  const [canSubmit, setcanSubmit] = useState(true)
  const changeFormData = (e) => {
    setformData({
      ...formData ,
      [e.target.name] : e.target.value
    })
  }


  const submitForm = async (e) => {
    e.preventDefault()
    setformErrors({})
    validateForm()

    if (canSubmit) {
      registerUserAPI()  
    } 
    setcanSubmit(true)
}

  const registerUserAPI = async () => {
    const response = await fetch(BACKEND_URL + '/api/user/newUser', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email
      })
    })
    const json = await response.json()
    console.log(json)
    if (json.success) {
      showSubmitModal("success")
    } else {
      showSubmitModal("fail")
    }
    setformData({
      name: '',
      email: ''
    })
  }


const validateForm = () => {
  let errors = {}
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (formData.name.length === 0) {
    errors.name = "Name is required"
    setcanSubmit(false)
  } else if (formData.name.length < 3) {
    errors.name = "Name must be alteast 3 characters"
    setcanSubmit(false)
  } else if (formData.name.length > 10) {
    errors.name = "Name can have a maximum of 10 characters"
    setcanSubmit(false)
  }

  if (formData.email.length === 0) {
    errors.email = "Email is required"
    setcanSubmit(false)
  } else if ( !regex.test(formData.email) ) {
    errors.email = "Enter a valid email"
    setcanSubmit(false)
  }

 setformErrors(errors)
}

  const focusReset = (e) => {
    if (  formData.name.length === 0 ) {
      delete formErrors.name
    }
    if ( formData.email.length === 0 ) {
      delete formErrors.email
    }
  }

  return (
    <form  onSubmit={(e) => {submitForm(e)}} className='register_form' >
      <input onFocus={(e) => focusReset(e)} name={"name"} value={formData.name} onChange={(e) => { changeFormData(e) }} type="text" placeholder='Enter your Name' className="px-3 register_input rounded-pill"></input>
      { ( formErrors.name) && <span id={"name_error"} className='error_text'>
        <i class="fa-solid fa-circle-xmark"></i>  {formErrors.name}</span>}
      <input onFocus={(e) => focusReset(e)} name={"email"} value={formData.email} onChange={(e) => { changeFormData(e) }} type="text"  placeholder='Enter Your Email' className="px-3 register_input rounded-pill"></input>
      {( formErrors.email) && <span id={"email_error"} className='error_text'>
        <i class="fa-solid fa-circle-xmark "></i> {formErrors.email}</span>}
      <input type='submit' className="register_input rounded-pill text-center" value={"Submit"} ></input>
    </form>
  )
}

export default Register