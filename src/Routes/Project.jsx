import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Project.css'
function Project() {
  return (
    <div>
      <div className='project'>
      <h1 style={{color:'white'}} className='text-center '>PROJECTS</h1>
      <h6 style={{color:'white'}} className='text-center mb-5'>Some of my most recent works</h6>
            <div  className="project-cards">
            <Card className='card-1' style={{ width: '18rem'}}>
              <Card.Img variant="top" src="https://5.imimg.com/data5/SELLER/Default/2020/9/HI/PO/EE/6668018/e-commerce-solutions-500x500.jpg" />
                <Card.Body>
                 <Card.Title>E-COMMERCE WEBSITE</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                   </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                <Card className='card-2' style={{ width: '18rem',marginLeft:'30px'}}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfqPwXUegzwFfwj_g3Q8AfeZnW7yIMoK_Pg&usqp=CAU" />
                <Card.Body>
                 <Card.Title>Gym booking site</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                   </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                <Card className='card-3' style={{ width: '18rem',marginLeft:'30px'}}>
              <Card.Img variant="top" src="https://s3.envato.com/files/481500010/01_sp-gaming-preview.jpg" />
                <Card.Body>
                 <Card.Title>gaming store</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                   </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                <Card className='card-4' style={{ width: '18rem',marginLeft:'30px'}}>
              <Card.Img variant="top" src="data:image/jpeg;base64,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"/>
                <Card.Body>
                 <Card.Title>parallax website</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                   </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
      </div>
    </div>
  )
}

export default Project
