import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function ContactUs() {
  return (
  <div className="contactUs">
    <Form>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="1">
          Name:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="ABC" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="1">
          City:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Ahmedabad" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="1">
          Mobile No:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="number" placeholder="9999999999" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="1">
          Query:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="textArea" placeholder="write here ..." />
        </Col>
      </Form.Group>
      <br/><button type="button" class="btn btn-dark">Submit</button>
    </Form>
    
  </div>
  )
}

export default ContactUs
