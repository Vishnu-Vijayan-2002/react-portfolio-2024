import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Project from './Project'
import Contact from './Contact'
function Home() {
  return (
  <>
      <div className='home-container d-flex flex-column'>
      <div className="mask">
        <div className='main-content'>
          <p style={{color:'white',fontSize:'20px',fontWeight:'600'}}>
            HI I AM VISHNU VIJAYN
          </p>
          <h1 style={{color:'white'}}>React Developer.</h1>
          <div className='btn-conatiner d-flex'>
            <Link to={'/project'} style={{backgroundColor:'orange',borderRadius:'5px',marginRight:'2px'}} className='btn'>Project</Link>
            <Link to={'/contact'} style={{textDecoration:'none',borderRadius:'5px',backgroundColor:'light'}} className='btn second' id='btn-second'>Contact</Link>
          </div>
        </div>
        </div>
         </div>
      <Project></Project>
      <Contact></Contact>
  </>
  )
}

export default Home
