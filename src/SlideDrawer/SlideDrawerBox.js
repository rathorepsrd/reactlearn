import React, { Component } from 'react'

export default class SlideDrawerBox extends Component {


 render() {
    
    console.log("this.props.show", this.props.show)
    console.log("this.props.toggle", this.props.toggle)
    console.log(this.state)
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
        
             
            
             {/* <Container>
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
             </Container> */}
          </div>
       </>
    )
 }

}

