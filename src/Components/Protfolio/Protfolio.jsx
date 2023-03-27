import React from 'react'
import cabin from "./cabin.png"
import cake from "./cake.png"
import circus from "./circus.png"
import game from "./game.png"
import safe from "./safe.png"
import submarine from "./submarine.png"

export default function Protfolio() {
  return ( 
  <>
  <div className="protfolio p-5">
  <div className="container ">
  <div className='title-sec text-center p-3'>
    <h1>PORTFOLIO</h1>
    <div className='line d-flex justify-content-center align-items-center'>
        <div className='custom-line'></div>
        <div><i className="fa-solid fa-star fa-lg fa-white"></i></div>
        <div className='custom-line'></div>
        </div>
  </div>
 
    <div className="row g-3">
        <div className="col-lg-4 col-md-6 position-relative ">
            <div className="item overflow-hidden">
               <img src={cabin} alt=""  className='rounded-3'/> 
            </div>
            <div className="layer d-flex justify-content-center align-items-center rounded-3">
            <i class="fa-solid fa-plus fa-5x"></i>            
            </div>
        </div>
        <div className="col-lg-4 col-md-6 position-relative">
            <div className="item overflow-hidden cuts">
               <img src={cake} alt=""  className='rounded-3'/> 
            </div>
            <div className="layer d-flex justify-content-center align-items-center rounded-3">
            <i class="fa-solid fa-plus fa-5x"></i>            
            </div>
        </div>
        <div className="col-lg-4 col-md-6 position-relative">
            <div className="item overflow-hidden">
               <img src={circus} alt=""  className='rounded-3'/> 
            </div>
            <div className="layer d-flex justify-content-center align-items-center rounded-3">
            <i class="fa-solid fa-plus fa-5x"></i>            
            </div>
        </div>
        <div className="col-lg-4 col-md-6 position-relative">
            <div className="item overflow-hidden">
               <img src={game} alt=""  className='rounded-3'/> 
            </div>
            <div className="layer d-flex justify-content-center align-items-center rounded-3">
            <i class="fa-solid fa-plus fa-5x"></i>            
            </div>
        </div>
        <div className="col-lg-4 col-md-6 position-relative">
            <div className="item overflow-hidden">
               <img src={safe} alt=""  className='rounded-3'/> 
            </div>
            <div className="layer d-flex justify-content-center align-items-center rounded-3">
            <i class="fa-solid fa-plus fa-5x"></i>            
            </div>
        </div>
        <div className="col-lg-4 col-md-6 position-relative">
            <div className="item overflow-hidden">
               <img src={submarine} alt=""  className='rounded-3'/> 
            </div>
            <div className="layer d-flex justify-content-center align-items-center rounded-3">
            <i class="fa-solid fa-plus fa-5x"></i>            
            </div>
        </div>
    </div>
  </div>
  </div>
  </>
  )
}
