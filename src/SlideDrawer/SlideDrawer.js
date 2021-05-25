import React from 'react'
import './SlideDrawer.css'

export default class SlideDrawer extends React.Component {
   render(){
       let drawerClasses = 'side-drawer'
       if(this.props.show) {
          drawerClasses = 'side-drawer open'
       }
       return(
          <>
          <div className={drawerClasses}>
            <div>
          <button onClick={this.props.toggle}>Close</button>
          </div>
             <h1>Hello, I'm sliding!</h1>
          </div>
          
          </>
)
    }
    
}