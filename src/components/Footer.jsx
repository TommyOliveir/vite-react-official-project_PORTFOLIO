import React from 'react'

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-flex">
          <div>
            <h4>Let's Start </h4>
            <p>get in touch with me, I have more and unique matter to offer</p>
            <p>“It is not the strongest or most intelligent who will survive but those who can best manage change.” – Charles Darwin, scientist</p>
            <p>“Soft skills get little respect but they will make or break your career” – Peggy Klaus, author</p>
          </div>

          <ul>
            <h4>Tommy</h4>
            <li><i class="ri-map-pin-fill"></i>Hungary</li>
            <li><i class="ri-phone-fill"></i>123467788</li>
            <li><i class="ri-mail-fill"></i>laridatommy@gmail.com</li>
          </ul>
          <ul>
            <h4>Relevant Links</h4>
            <li><i class="ri-arrow-right-s-fill"></i>Location</li>
            <li><i class="ri-arrow-right-s-fill"></i>tel</li>
            <li><i class="ri-arrow-right-s-fill"></i>email</li>
          </ul>
        </div>


      </div>
      <div className='copyright'>
        <p>© Copyright 2023 - Tommy </p>
      </div>

    </>

  )
}

export default Footer
