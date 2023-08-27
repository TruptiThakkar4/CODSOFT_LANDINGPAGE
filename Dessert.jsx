import React from 'react'
import Card from 'react-bootstrap/Card';
import Waffle from './Photos/waffel.jpg';
import Strawberry from './Photos/strawberry.jpg';
import Donut from './Photos/donut.jpg';
import ChocoIceCream from './Photos/choco_icecream.jpg';
import Candy from './Photos/candy.jpg';
import Cake from './Photos/cake.jpg';
function Dessert() {
  return (
    <div>
    <div className='food'>
         
        <Card style={{width: "18rem",height:"20rem"}}>
            <Card.Img variant="top" src={Cake} />
            <Card.Body>
              <Card.Title>Cake</Card.Title>
             </Card.Body>
        </Card>
      
        <Card style={{width: "18rem",height:"20rem"}}>
            <Card.Img variant="top" src={Waffle} />
            <Card.Body>
              <Card.Title>Waffle</Card.Title>
             </Card.Body>
        </Card>
       
       
     
        <Card style={{width: "18rem",height:"20rem"}}>
            <Card.Img variant="top" src={Strawberry} />
            <Card.Body>
              <Card.Title>Strawberry</Card.Title>
             </Card.Body>
        </Card>
    
    
      <Card style={{width: "18rem",height:"20rem"}}>
            <Card.Img variant="top" src={Candy} />
            <Card.Body>
              <Card.Title>Candy</Card.Title>
             </Card.Body>
        </Card>
      <Card style={{width: "18rem",height:"20rem"}}>
            <Card.Img variant="top" src={ChocoIceCream} />
            <Card.Body>
              <Card.Title>Choco IceCream</Card.Title>
             </Card.Body>
        </Card>
       
        <Card style={{width: "18rem",height:"20rem"}}>
            <Card.Img variant="top" src={Donut} />
            <Card.Body>
              <Card.Title>Donut</Card.Title>
             </Card.Body>
        </Card>
      </div> 
    </div>
  )
}

export default Dessert
