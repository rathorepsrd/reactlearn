import React from 'react'
import './SlideDrawer.css'
import { Navbar, Nav, NavDropdown, Row, Col, Container, Button, FormControl } from 'react-bootstrap';
import { Animate } from "react-simple-animate";
// import './ReactSimpleAnimate.css'
export default class SlideDrawer extends React.Component {
   state = {
      play: false
    };

    componentDidMount(){
      if (this.props.toggle){
      setInterval(() => {
        this.onPlay()
      }, 2000);
   }
    }
    onPlay = () => {
      // this.setState({ play: true} ) 
      
   }
   render() {
      
      console.log("this.props.show", this.props.show)
      console.log("this.props.toggle", this.props.toggle)
      console.log(this.state)
      let drawerClasses = 'side-drawer'
      if (this.props.show) {
         drawerClasses = 'side-drawer open'
      
      }

      let newPlay;
      if (this.props.show) {
         newPlay = <><Animate
         play
         duration={1}
         delay={0.3}
         start={{
           transform: "translateX(300px)"
         }}
         end={{ transform: "translateX(-100px)" }}
       >
         <div className="divStyle" >Hello</div>
       </Animate>
       <Animate
         play
         duration={1}
         delay={1.8}
         start={{
           transform: "translateX(300px)"
         }}
         end={{ transform: "translateX(-200px)" }}
       >
         <div className="divS" >Hello Second</div>
       </Animate>
       <Animate
         play
        
         duration={1}
         delay={3.6}
         start={{
           transform: "translateX(300px)"
         }}
         end={{ transform: "translateX(-300px)" }}
       >
         <div className="divT" >Hello third</div>
       </Animate></>
      }
      let newPause;
      if (this.props.toggle) {
          newPause= <><Animate
          play
          duration={1}
          delay={3}
          start={{
            transform: "translateX(0px)"
          }}
          end={{ transform: "translateX(100px)" }}
        >
          <div className="divStyle" >Hello First</div>
        </Animate>
        <Animate
          play
          duration={1}
          delay={1.8}
          start={{
            transform: "translateX(0px)"
          }}
          end={{ transform: "translateX(200px)" }}
        >
          <div className="divS" >Hello Second</div>
        </Animate>
        <Animate
          play
         
          duration={1}
          delay={.3}
          start={{
            transform: "translateX(0px)"
          }}
          end={{ transform: "translateX(300px)" }}
        >
          <div className="divT" >Hello third</div>
        </Animate></>
      }
      return (
         <>
            <div className={drawerClasses}>
               <div >
                  <button onClick={this.props.toggle} className="drawerCloseButton">Close</button>
               </div>
               {newPlay}
               
               {/* {this.state.play == true ?
<>
        <Animate
          play={this.state.play}
          duration={1}
          delay={0.3}
          start={{
            transform: "translateX(300px)"
          }}
          end={{ transform: "translateX(-100px)" }}
        >
          <div className="divStyle" >Hello</div>
        </Animate>
        <Animate
          play={this.state.play}
          duration={1}
          delay={1.8}
          start={{
            transform: "translateX(300px)"
          }}
          end={{ transform: "translateX(-200px)" }}
        >
          <div className="divS" >Hello Second</div>
        </Animate>
        <Animate
          play={this.state.play}
         
          duration={1}
          delay={3.6}
          start={{
            transform: "translateX(300px)"
          }}
          end={{ transform: "translateX(-300px)" }}
        >
          <div className="divT" >Hello third</div>
        </Animate>
        
        <button
          onClick={this.onPlay}
          className="buttonStyle"
         //  onClick={() => this.setState(({ play }) => ({ play: !play }))}
        >
          Play
        </button>
        </>
        :
        <>
        <Animate
          play={this.state.play}
          duration={1}
          delay={3}
          start={{
            transform: "translateX(0px)"
          }}
          end={{ transform: "translateX(100px)" }}
        >
          <div className="divStyle" >Hello First</div>
        </Animate>
        <Animate
          play={this.state.play}
          duration={1}
          delay={1.8}
          start={{
            transform: "translateX(0px)"
          }}
          end={{ transform: "translateX(200px)" }}
        >
          <div className="divS" >Hello Second</div>
        </Animate>
        <Animate
          play={this.state.play}
         
          duration={1}
          delay={.3}
          start={{
            transform: "translateX(0px)"
          }}
          end={{ transform: "translateX(300px)" }}
        >
          <div className="divT" >Hello third</div>
        </Animate>
        
        <button
          onClick={this.onPlay}
          className="buttonStyle"
         //  onClick={() => this.setState(({ play }) => ({ play: !play }))}
        >
          Play
        </button>
        </>}
          */}
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