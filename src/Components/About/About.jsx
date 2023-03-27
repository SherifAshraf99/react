import React from 'react'

export default function About() {
  return (
   <div className=" about container-fluid p-5">
      <div className='title-sec text-center p-3'>
     <h1>About</h1>
     <div className='line d-flex justify-content-center align-items-center'>
        <div className='custom-line'></div>
        <div><i className="fa-solid fa-star fa-lg fa-white"></i></div>
        <div className='custom-line'></div>
        </div>
    </div>
    <div className="about-title row justify-content-center">
        <div className="col-lg-4">
            <div className="title">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="title">
            <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
        </div>
    </div>
   </div>
  )
}
