import React from 'react'
import './MainPage.css'
export default class MainPage extends React.Component {
   render(){
     return (
        <div class="container" onClick={this.props.toggle}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
     )
    }   
}