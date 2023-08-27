import React from 'react'
import Card from 'react-bootstrap/Card';
import Naan from './Photos/naan.jpg';
import Sabji from './Photos/sabji.jpg';
import Biryani from './Photos/biryani.jpg';
function Punjabi() {
  return (
    <div>
       <div className='food'>
        <Card  style={{width: "18rem",height:"20rem"}}>
            <Card.Img variant="top" src={Naan} />
            <Card.Body>
              <Card.Title>Naan</Card.Title>
             </Card.Body>
        </Card>
       
        <Card  style={{width: "18rem",height:"20rem"}}>
            <Card.Img variant="top" src={Sabji} />
            <Card.Body>
              <Card.Title>Sabji</Card.Title>
             </Card.Body>
        </Card>
        
        <Card  style={{width: "18rem",height:"20rem"}}>
            <Card.Img variant="top" src={Biryani} />
            <Card.Body>
              <Card.Title>Biryani</Card.Title>
             </Card.Body>
        </Card>
        </div>
     </div>
  )
}

export default Punjabi
