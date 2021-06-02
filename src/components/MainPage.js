import React from 'react'
import './MainPage.css'
export default class MainPage extends React.Component {
   render(){
     return (
        <div className="container" onClick={this.props.toggle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
     )
    }   
}