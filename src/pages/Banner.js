import React from 'react'

function Banner() {
  return ( 
    <div className ='banner' data-aos= 'fade-in' data-aos-duration ='2000'>
        <div className="banner1">
          <p>Trade-in-offer</p>
          <h1 className="bannertext">
            Super value deals <br/><span>On all products</span>
          </h1>
          <h4>Save more with coupons & up to 70% off!</h4>
          <button> Shop Now</button>
        </div>
    </div> 
  )
}

export default Banner