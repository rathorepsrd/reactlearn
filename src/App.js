import React, { Component } from 'react'

import CardButton from './CardButton';
import Menu from './Menu';

import MainPage from './components/MainPage.js'
import SlideDrawerF from './SlideDrawer/SlideDrawerF.js'
import Backdrop from './SlideDrawer/Backdrop.js'
import ListDelayAnimation from './components/ListDelayAnimation'
import SlideBox from './components/SlideBox';

import ReactSimpleAnimate from './components/ReactSimpleAnimate'

export default class App extends Component {
  state = { drawerOpen: false }
  drawerToggleClickHandler = () => {
      this.setState({
        drawerOpen: !this.state.drawerOpen
      })
  }
  render() {
    let backdrop;
    if(this.state.drawerOpen){
      backdrop = <Backdrop toggle={this.drawerToggleClickHandler}/>;
     }
     console.log("app",this.state)
    return (
      <div>
        <Menu />
        {/* ye slide box chalta h app k jagh rakho to */}
        {/* <SlideBox /> */}

        {/* list h sirf */}
        <ListDelayAnimation />
        {this.state.drawerOpen &&
        < SlideDrawerF show={this.state.drawerOpen} toggle={this.drawerToggleClickHandler}/>
        
  }{ backdrop }
 
        < MainPage toggle={this.drawerToggleClickHandler}/>  
        {/* button k category behalf filter cards */}
        <CardButton />

        {/* ye niche code app pe chl rha yha nhi chal rha h
         */}
        {/* <ReactSimpleAnimate /> */}
        <br /><br />
        <ReactSimpleAnimate />
       
      </div>
    )
  }
}

