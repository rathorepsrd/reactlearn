import React, { Component } from 'react';
import './SlideDrawer.css';
import { Navbar, Nav, NavDropdown, Row, Col, Container, Button, FormControl } from 'react-bootstrap';
export default class SlideDrawer extends Component {
  render() {
    let drawerClasses = 'side-drawer'
    if (this.props.show) {
       drawerClasses = 'side-drawer open'
    
    }
    return (
      <>
        <div className={drawerClasses}>
               <div >
                  <button onClick={this.props.toggle} className="drawerCloseButton">Close</button>
               </div>
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
        </div>
        
      </>
    )
  }
}
