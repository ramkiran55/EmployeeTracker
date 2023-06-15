import * as React from 'react';
import {Button, Form, Row, Col, Container, Stack} from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './styles.module.css'

const Main = () => {
    return (
      <div>
        <div>
            <Container className = {styles.custom_container} fluid>
                <Row>
                  <Col xs={9}>
                  <h1 className= {styles.custom_h1}>Hire an Employee</h1>
                  </Col>
                  <Col>
                  <Button variant="primary" className= {styles.custom_button} >Next</Button>
                  <Button variant="secondary" className= {styles.custom_button}>Submit</Button>
                  <Button variant="secondary" className= {styles.custom_button}>Cancel</Button>
                  </Col>
                </Row>
            </Container>
        </div>
        <div>
        <h4 className = {styles.custom_h4}>Basic Details</h4>             
        <Container>
          <Form >
            <Form.Group className='mb-3'>
              <Row>
                <Col md="auto">
                  <Form.Label>Hire Date</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Control className = {styles.custom_form_field} type="date"></Form.Control>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Row>
                <Col md="auto">
                  <Form.Label>Hire Action</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Select>
                    <option>Vacant Position</option>
                    <option>New Position</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>  
            <Form.Group className='mb-3'>
              <Row>
                <Col md="auto">
                  <Form.Label>Company</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Select className = {styles.custom_form_field}>
                    <option>Pringle Robotics Inc</option>
                    <option>Pringle Technologies Inc</option>
                    <option>Pringle Stables Inc</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>             
          </Form>
          </Container>
        </div>
        <div>
        <h4 className = {styles.custom_h4}>Personal Details</h4>            
        <Container>
            <Form>
            <Form.Group className='mb-3'>
              <Row>
                <Col md="auto">
                  <Form.Label>Title</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Select className = {styles.custom_form_field}>
                    <option>Mr.</option>
                    <option>Miss.</option>
                    <option>Mrs.</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>     
            <Form.Group className='mb-3'>
              <Row>
                <Col md="auto">
                  <Form.Label>First Name</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Control type="text" className = {styles.custom_form_field}></Form.Control>
                </Col>
              </Row>
            </Form.Group>   
            <Form.Group className='mb-3'>
              <Row>
                <Col md="auto">
                  <Form.Label>Last Name</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Control type="text" className = {styles.custom_form_field}></Form.Control>
                </Col>
              </Row>
            </Form.Group>    
            <Form.Group className='mb-3'>
              <Row>
                <Col md="auto">
                  <Form.Label>Gender</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Select className = {styles.custom_form_field}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>       
            <Form.Group className='mb-3'>
              <Row>
                <Col md="auto">
                  <Form.Label>Date of Birth</Form.Label>
                </Col>
                <Col md="auto">
                  <Form.Control type="date" className = {styles.custom_form_field}></Form.Control>
                </Col>
              </Row>
            </Form.Group>                                           
            </Form>
            </Container>
        </div>
      </div>
    );
};

export default Main