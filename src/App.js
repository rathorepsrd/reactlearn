import React, { Component } from 'react'

import CardButton from './CardButton';
import Menu from './Menu';

import MainPage from './components/MainPage.js'
import SlideDrawer from './SlideDrawer/SlideDrawer.js'
import Backdrop from './SlideDrawer/Backdrop.js'
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
     console.log(this.state)
    return (
      <div>
        <Menu />
        < SlideDrawer show={this.state.drawerOpen} toggle={this.drawerToggleClickHandler}/>
        { backdrop }
        < MainPage toggle={this.drawerToggleClickHandler}/>  
        {/* button k category behalf filter cards */}
        <CardButton />



      </div>
    )
  }
}
