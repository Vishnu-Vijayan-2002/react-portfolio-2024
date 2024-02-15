import React from 'react'
import Form from 'react-bootstrap/Form';
import './Contact.css'
import Footer from '../Components/Footer';
import About from './About';
function Contact() {
  const handleBtn =()=>{
     if(Name.value && email.value || sub.value || ms.value==="")
     {
      alert("fill the from")
     }else{
      alert("successfully send!!!")
     }
  }
  return (
    <>
      <div className='contact'>
        <div className='contact-container'>
           <Form>
          <Form.Group className="mb-3 rounded" controlId="exampleForm.ControlInput1">
            <Form.Label style={{color:'white'}}>Name</Form.Label>
            <Form.Control id='Name' type="email" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3 rounded"  controlId="exampleForm.ControlInput1">
            <Form.Label style={{color:'white'}}>Email address</Form.Label>
            <Form.Control id='email' type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3 rounded" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{color:'white'}}>Subject</Form.Label>
            <Form.Control id='sub' as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3 rounded" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{color:'white'}}>Message</Form.Label>
            <Form.Control id='ms' as="textarea" rows={3} />
          </Form.Group>
          <button onClick={handleBtn} style={{borderRadius:'5px'}} className='btn btn-info'>Send</button>
        </Form>
        </div>
      </div>
      <About/>
    </>
  
  )
}

export default Contact
