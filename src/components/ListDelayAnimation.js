import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Row, Col, Container, Button, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListDelayAnimation.css'

export default class ListDelayAnimation extends Component {
  render() {
    return (
      <>
       <Container>
        <Row >
        <Col className="fadeBox">
          <h3>Category 1</h3>
          <Col>Action</Col>
          <Col>Another action</Col>
          <Col>Something</Col>
        </Col>
        <Col className="fadeBox">
          <h3>Category 1</h3>
          <Col>Action</Col>
          <Col>Another action</Col>
          <Col>Something</Col>
          </Col>
          <Col className="fadeBox">
          <h3>Category 1</h3>
          <Col>Action</Col>
          <Col>Another action</Col>
          <Col>Something</Col>
          </Col>
        </Row>
        </Container>
      </>
    )
  }
}
