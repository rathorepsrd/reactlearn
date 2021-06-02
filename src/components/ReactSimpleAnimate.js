import React, { Component } from 'react'
import { Animate } from "react-simple-animate";
import './ReactSimpleAnimate.css'

export default class ReactSimpleAnimate extends Component {
  state = {
    play: false
  };

  render() {
    console.log(this.state)
    return (
      <>
   
{this.state.play == true ?
<>
        <Animate
          play={this.state.play}
          duration={1}
          delay={0.3}
          start={{
            transform: "translateX(0px)"
          }}
          end={{ transform: "translateX(100px)" }}
        >
          <div className="divStyle" >Hello</div>
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
          delay={3.6}
          start={{
            transform: "translateX(0px)"
          }}
          end={{ transform: "translateX(300px)" }}
        >
          <div className="divT" >Hello third</div>
        </Animate>
        
        <button
          
          className="buttonStyle"
          onClick={() => this.setState(({ play }) => ({ play: !play }))}
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
          
          className="buttonStyle"
          onClick={() => this.setState(({ play }) => ({ play: !play }))}
        >
          Play
        </button>
        </>}
         
      </>
    );
  }
}
