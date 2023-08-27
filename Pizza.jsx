import React from 'react'
import Card from 'react-bootstrap/Card';
import TomatoPizza from './Photos/tomato_pizza.jpg';
import VegPizza from './Photos/veg_pizza.jpg';
import pizza from './Photos/pizza.jpg';
import ItalicPizza from './Photos/italic_pizza.jpg';
import CheesePizza from './Photos/cheese_pizza.jpg';
function Pizza() {
  return (
    <div>
         <div className='food'>
        <Card style={{width: "18rem"}}>
            <Card.Img variant="top" src={VegPizza} />
            <Card.Body>
              <Card.Title>Veg Pizza</Card.Title>
             </Card.Body>
        </Card>
       
        <Card style={{width: "18rem"}}>
            <Card.Img variant="top" src={ItalicPizza} />
            <Card.Body>
              <Card.Title>Italic Pizza</Card.Title>
             </Card.Body>
        </Card>
       
        <Card style={{width: "18rem",height:"20rem"}}>
            <Card.Img variant="top" src={CheesePizza} />
            <Card.Body>
              <Card.Title>Cheese Pizza</Card.Title>
             </Card.Body>
        </Card>
      
      <Card style={{width: "18rem",height:"20rem"}}>
            <Card.Img variant="top" src={TomatoPizza} />
            <Card.Body>
              <Card.Title>Tomato Pizza</Card.Title>
              </Card.Body>
        </Card>
       
        <Card style={{width: "18rem",height:"20rem"}}>
            <Card.Img variant="top" src={pizza} />
            <Card.Body>
              <Card.Title>Spe.Pizza</Card.Title>
             </Card.Body>
        </Card>
        
    </div>
    </div>
  )
}

export default Pizza
