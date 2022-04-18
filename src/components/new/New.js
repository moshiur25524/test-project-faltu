import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


const New = () => {
    return (
        <div>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default New;