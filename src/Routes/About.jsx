import React from 'react'
import './About.css'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
function About() {
  return (
    <div>
      <div className="about">
        <div className='content'>
          <h1 style={{color:'white'}} className='text-center'>ABOUT</h1>
          <h6 style={{color:'white'}} className='text-center'>Im a friendly Front-End Developer</h6>
        </div>
        <div className="about-content row">
          <div className="col-lg-6">
            <h3 style={{color:'white',paddingTop:'70px'}} className='text-center'>Who Am I?</h3>
            <h6 style={{color:'white',paddingTop:'20px',textAlign:'justify',paddingLeft:'60px'}}>Im areact font-end developre.I create responsive secure websites for my client</h6>
            <Link to={'/contact'}>
              <button style={{borderRadius:'5px',marginLeft:'45%',marginTop:'30px'}} className='btn btn-info '>Contact</button>
            </Link>
          </div>
          <div className="col-lg-6">
            <div className="image-container">
              <img className='img-fluid' src="https://www.thecuneiform.com/wp-content/uploads/2024/01/MicrosoftTeams-image-56.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
