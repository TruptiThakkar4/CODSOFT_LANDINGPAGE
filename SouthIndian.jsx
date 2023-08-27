import React from 'react'
import Card from 'react-bootstrap/Card';
import Idli from './Photos/idli.jpg';
import MasalaDhosa from './Photos/masala_dhosa.jpg';
function SouthIndian() {
  return (
    <div>
        <div className='food'>
        <Card  style={{width: "18rem",height:"20rem"}}>
            <Card.Img variant="top" src={MasalaDhosa} />
            <Card.Body>
              <Card.Title>Masala Dhosa</Card.Title>
             </Card.Body>
        </Card>
       
        <Card  style={{width: "18rem",height:"20rem"}}>
            <Card.Img variant="top" src={Idli} />
            <Card.Body>
              <Card.Title>Idli</Card.Title>
             </Card.Body>
        </Card>
        </div>
 </div>
  )
}

export default SouthIndian
