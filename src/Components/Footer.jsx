import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
      <div className='footer row'>
        <div className="col-lg-4 ms-5">
           <h3 style={{color:'white',fontSize:'20px',marginTop:'20px'}}>About the Company</h3>
           <p style={{textAlign:'justify',color:'white',marginTop:'20px'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquid obcaecati ullam soluta in esse a officiis temp
           </p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-3 d-flex flex-column ms-5">
              <a style={{color:'white',textDecoration:'none',marginTop:'40px'}} href=""><i class="fa-solid fa-house"></i>  123 Housing Socity.Kottayam</a>
              <a style={{color:'white',textDecoration:'none',marginTop:'20px'}} href=""><i class="fa-solid fa-phone"></i>  +91 9846-783-451</a>
              <a style={{color:'white',textDecoration:'none',marginTop:'20px'}} href=""><i class="fa-solid fa-envelope"></i> info@gmail.com</a>
        </div>
        <div className="col-lg-3 d-flex align-items-center">
              <a style={{color:'white',marginLeft:'120px'}} href=""><i className='fa-brands fa-instagram'></i></a>
              <a style={{color:'white',marginLeft:'20px'}} href=""><i className='fa-brands fa-facebook'></i></a>
              <a style={{color:'white',marginLeft:'20px'}} href=""><i className='fa-brands fa-linkedin'></i></a>
              <a style={{color:'white',marginLeft:'20px'}} href=""><i className='fa-brands fa-whatsapp'></i></a>
        </div>
      </div>
    </>
  )
}

export default Footer
