import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const {imgs} =  this.props
    return (
      <div>
          <ul>
    {imgs.map(
      (img, i)=>
      <li  key={i}>
        <figure>
          <img src={img.src} alt={img.author}/>
          <figcaption> 
            <div>{img.author} </div>
            <span>{img.tag}</span>
          </figcaption>
        </figure>
      </li>)}
  </ul>
      </div>
    )
  }
}
