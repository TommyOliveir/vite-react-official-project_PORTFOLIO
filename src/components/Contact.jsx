import React from 'react'
import Form from './Form'

function Contact() {
  return (
    <>
      <div className="contact-flex">
        <div className='contact-text'>
          <h2>Contact Me</h2>
          <p>Please reach out if you have any questions! I'm happy to jump on a video call to brainstorm projects and ideas. Send me an email at jane@example.com or call me directly at +123456789</p>
        </div>
        <Form />
      </div>
    </>
  )
}

export default Contact
