import React from 'react'

export default function Footer() {
  return (
    <div className='footer p-5 text-center'>
        <div className="container">
        <div className='row'>
            <div className="col-md-4 mb-5">
                <div className="title-footer">
                    <h2 className='mb-4'>LOCATION</h2>
                    <p>2215 John Daniel Drive Clark, MO 65243</p>
                </div>
            </div>
            <div className="col-md-4 mb-5">
                <div className="title-footer">
                    <h2 className='mb-4'>AROUND THE WEB</h2>
                   <div className="social d-flex justify-content-center">
                    <div className="icon">
                    <i class="fa-brands fa-facebook"></i>
                    </div>
                    <div className="icon">
                    <i class="fa-brands fa-twitter"></i>                    
                    </div>
                    <div className="icon">
                    <i class="fa-brands fa-linkedin-in"></i>                    
                    </div>
                   </div>
                </div>
            </div>
            <div className="col-md-4 mb-5">
                <div className="title-footer">
                    <h2 className='mb-4'>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
