import React, { Component } from 'react'

export default class Filters extends Component {
  render() {
    const {onClickAll, all, onClick, filters} = this.props
    return (
      <div>
          <form>
    <ul>
      <li onClick={onClickAll}>
        <input 
          type="checkbox"
          checked={all}
        />
        <label htmlFor="all">All</label>
      </li>
       {filters.map(
        (filter, i)=>
          <li  key={i} data-index={i} onClick={onClick} >
            <input 
              id={filter.name} 
              type="checkbox" 
              checked={filter.status}
            />
            <label htmlFor={filter.name}>{filter.name}</label>
          </li>)}
    </ul>
  </form>
      </div>
    )
  }
}
