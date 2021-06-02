import React, { Component } from 'react'
import './SlideBox.css'

const items = [0, 1, 2, 3];

export default class SlideBox extends Component {
  state = {
    index: 0,
    index1: 1,
    index2: 2
  };

  increment = 1;
  componentDidMount = () => {
    setInterval(() => {
      this.setState((state) => {
      if(state.index < 1){
        return {
          index: state.index + this.increment,
          // increment: this.increment+this.increment
        };}
      if(state.index1 < 2){
        return {
          index1: state.index1 + 1,
        };}
        if(state.index2 < 3){
          return {
            index2: state.index2 + 1,
          };}
      });
    }, 5000);
  };


  
  render() {
    
    console.log(this.state.index)
    const {index, index1, index2}= this.state
    return (
      <>
        <div className="App">
        <div className="background">
        {items.map(i => {
          return (
            <div className="circle">
              <div
                className="mover"
                style={{
                  transform: `translateX(${(index - i) * 100}px)`,
                }}
              />
               <div
                className="mover1"
                style={{
                  transform: `translateX(${(index1 - i) * 100}px)`,
                }}
              />
              <div
                className="mover2"
                style={{
                  transform: `translateX(${(index2 - i) * 100}px)`,
                }}
              />

            </div>
          );
        })}
        </div>
      </div>
      </>
    )
  }
}


// import React, { Component } from "react";
// import "./SlideBox.css";
// import { Navbar, Nav, NavDropdown, Row, Col, Container, Button, FormControl } from 'react-bootstrap';

// const items = [0, 1, 2, 3];

// class SlideBox extends Component {
//   state = {
//     index: 0,
//   };
//   increment = 1;
  // componentDidMount = () => {
  //   setInterval(() => {
  //     this.setState((state) => {
        // if (state.index <= 0) {
        //   this.increment = 1;

        //   return {
        //     index: state.index + this.increment,
        //   };
  //       }
  //     });
  //   }, 500);
  // };
//   handleBack = () => {
//     this.setState((state) => {
//       if (this.state.index >= items.length - 1) {
//         this.increment = -1;
//       }
//       return {
//         index: this.state.index + this.increment,
//       }
//     })
//   }
//   render() {
//     const { index } = this.state;

//     return (
//       <>
//         <div className="App">
//           <div className="background">
//             {items.map((i,index) => {
//               return (
//                 <div key={index} className="moveBox">
//                   <div
//                     className="mover"
//                     style={{
//                       transform: `translateX(${(index - i) * 100}px)`,
//                     }}
//                   >
//                     <Container>
//                       <Row >
//                         <Col className="fadeBox">
//                           <h5>Cat 1</h5>
//                           <Col>Action</Col>
//                           <Col>Another action</Col>
//                         </Col>
//                       </Row>
//                     </Container>
//                   </div>
//                   <div
//                     className="mover1"
//                     style={{
//                       transform: `translateX(${(index - i) * 100}px)`,
//                     }}
//                   >
//                     <Container>
//                       <Row >
//                         <Col className="fadeBox">
//                           <h5>Cat 2</h5>
//                           <Col>Action</Col>
//                           <Col>Another action</Col>
//                         </Col>
//                       </Row>
//                     </Container>
//                   </div>
//                   <div
//                     className="mover2"
//                     style={{
//                       transform: `translateX(${(index - i) * 100}px)`,
//                     }}
//                   > <Container>
//                       <Row >
//                         <Col className="fadeBox">
//                           <h5>Cat 3</h5>
//                           <Col>Action</Col>
//                           <Col>Another action</Col>
//                         </Col>
//                       </Row>
//                     </Container></div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <button  className="buttonStyle" onClick={this.handleBack}> back</button>
//       </>
//     );
//   }
// }

// export default SlideBox;