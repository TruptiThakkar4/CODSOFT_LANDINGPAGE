import React from 'react'
import Card from 'react-bootstrap/Card';
import Manchurian from './Photos/manchurian.jpg';
import Noodles from './Photos/noodles.jpg';
import Momos from './Photos/momos.jpg';

function Chinese() {
  return (
    <div>
    <div className='food'>

        <Card style={{width: "18rem",height:"20rem"}}>
            <Card.Img variant="top" src={Manchurian}  />
            <Card.Body>
              <Card.Title>Manchurian</Card.Title>
              </Card.Body>
        </Card>
      
        <Card style={{width: "18rem",height:"20rem"}}>
            <Card.Img variant="top" src={Noodles} />
            <Card.Body>
              <Card.Title>Noodles</Card.Title>
             </Card.Body>
        </Card>
       
        <Card style={{width: "18rem",height:"20rem"}}>
            <Card.Img variant="top" src={Momos} />
            <Card.Body>
              <Card.Title>Momos</Card.Title>
            </Card.Body>
        </Card>
      
    </div>
    </div>
  )
}

export default Chinese
