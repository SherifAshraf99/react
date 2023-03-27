import React from 'react'

export default function Contact() {
  return (
    <div className="contact p-5">
            <div className='container'>
    <div className='title-sec text-center p-3'>
     <h1>CONTACT ME</h1>
     <div className='line d-flex justify-content-center align-items-center'>
        <div className='custom-line'></div>
        <div><i className="fa-solid fa-star fa-lg fa-white"></i></div>
        <div className='custom-line'></div>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-9 mx-auto">
        <form action="">
        <div className="name mb-3">
            <input type="text"  className='form-control'  placeholder='Name'/>
        </div>
        <div className="email mb-3">
            <input type="email" className='form-control'  placeholder='Email Address' />
        </div>
        <div className="phone mb-3">
            <input type="number" className='form-control'  placeholder='Phone Number'/>
        </div>
        <div className="message mb-3">
           <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='form-control'></textarea>
        </div>
        <button>Send</button>
    </form>
        </div>
    </div>
    </div>

    </div>
  )
}
