import React from 'react'
import avatar from "./avataaars.svg"
export default function Header() {
  return (
    <div className='header text-center p-5'>
        <div className="container d-flex justify-content-center align-items-center p-3">
        <div className="title">
        <img src={avatar} alt="" width={"200px"}/>
      <h1 className='mt-3'>START REACT</h1>
      <div className='line d-flex justify-content-center align-items-center'>
        <div className='custom-line'></div>
        <div> <i className="fa-solid fa-star fa-lg fa-white"></i></div>
        <div className='custom-line'></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
        </div>
    </div>
  )
}
