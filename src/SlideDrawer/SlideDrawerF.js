import React, { Component } from 'react'
import './SlideDrawerF.scss';
let drawerCloseClasses;
export default class SlideDrawerF extends Component {
 state={
  drawerClasses: ''
 }

  componentDidMount(){
    this.state.drawerClasses = 'side-drawer'
    if (this.props.show == true) {
      this.state.drawerClasses = 'side-drawer open'
    }
  }
  sidebarClose = (event,withAnimation) => {
    event.preventDefault();
    this.state.drawerClasses = 'sidebar-block-close';
    if (withAnimation) {
      if (window.innerWidth > 991) {
        setTimeout(() => {
          this.props.toggle()
        }, 2000);
      } else {
        setTimeout(() => {
          this.props.toggle()
        }, 500);
      }
    } else {
      this.props.toggle()
    }
  }

    // // if (withAnimation) {
    //   if (window.innerWidth > 991) {
    //     setTimeout(() => {
    //       this.closeSidebar(event, true)
    //       this.state.drawerClasses= 'side-drawer close';
    //       this.props.toggle()
    //     }, 2000);
    //   } else {
    //     setTimeout(() => {
    //       this.state.drawerClasses= 'side-drawer close';
    //       this.props.toggle()
    //     }, 500);
    //   }
    // } 

  render() {
    // let drawerClasses = 'side-drawer'
    // if (this.props.show== true) {
    //   drawerClasses = 'side-drawer open'
    // }
    console.log("F", this.props)
    const {drawerClasses} = this.state;
    const {show} = this.props;
    return (
      <>
        <div 
        className={`side-drawer  ${show ? "open" : "close"}`}
        //  className={drawerClasses}
        >
          {/* <div >
            <button onClick={this.props.toggle} className="drawerCloseButton">Close</button>
          </div>
            Hello
          </div> */}
          
          <div className="sidebar-container">
            <div className="row mx-0">
          
              <div className="col-12 col-lg-3 sidebar-block sidebar-web d-none d-lg-block" >
                <h2 className="text-uppercase color-white">Web</h2>
                <p className="color-white">At eLEOPARD, websites feature hand-crafted design and fast load times so that your
                business is sure to impress potential customers who visit your site.</p>
                <button className="btn btn-white">Know More</button>
              </div>
  
          <div className="col-12 col-lg-3 sidebar-block sidebar-app d-none d-lg-block" >
            <h2 className="text-uppercase color-white">Apps</h2>
            <p className="color-white">We pay attention to User Interface as well as User Experience. Our Custom designed
                and developed apps are targeted at its users</p>
            <button className="btn btn-white" >Know More</button>
          </div>
          <div className="col-12 col-lg-3 sidebar-block sidebar-branding d-none d-lg-block" >
            <h2 className="text-uppercase color-white">BRANDING</h2>
            <p className="color-white">We provide departments, services and organizations (both on and off campus) with
                professional design, print, photography, video and web design services.</p>
            <button className="btn btn-white">Know More</button>
          </div>
         
          <div className="col-12 col-lg-3 sidebar-block sidebar-links" >
            {/* <button className="btn btn-white btn-circle" (click)="closeSidebar($event, true)" [ngClass]="{'btn-onscroll': buttonScroll}">X</button> */}
            <button onClick={(event) => this.sidebarClose(event, true)} className="btn btn-white btn-circle" className={drawerCloseClasses}>Close</button>
            <ul>
              <li>
                <a>About</a>
                <a>Blog</a>
              </li>
              {/* <li *ngFor="let item of sidebarItems" [class]="item.class">
                    <a *ngIf="item.urlType == 'filter'" [routerLink]="[item.url]" [queryParams]="{ filter : item.filterName }" title="{{item.title}}" (click)="closeSidebar($event)">{{ item.name }}</a>
                    <a *ngIf="item.urlType == 'router'" [routerLink]="[item.url]" title="{{item.title}}" (click)="closeSidebar($event)">{{ item.name }}</a>
                    <a *ngIf="item.urlType == 'href'" href="{{item.url}}" target="_blank" title="{{item.title}}" (click)="closeSidebar($event)">{{ item.name }}</a>
                  </li> */}
            </ul>
          </div>
          </div>
        </div> 
        }
          </div>     
      </>
    )
  }
}

