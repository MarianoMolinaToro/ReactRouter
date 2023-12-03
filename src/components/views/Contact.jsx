import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const Contact = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center'  , textAlign: 'center'}}> 
        <Form style={{width: '800px', margin: '30px'}}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <h2>Cuéntanos, ¿en qué te podemos ayudar?
            </h2>
            <Form.Label>Correo:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="danger">Enviar</Button>
        </Form>
     </div>
  )
}

export default Contact