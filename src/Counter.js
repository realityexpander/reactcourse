import React, { Component } from 'react'
import { ThemeContext } from './App'
export default class Counter extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      count: props.initialCount
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {style => (
          <div style = {style}>
          <button onClick={()=>this.changeCount(-1)}>-</button>
          <span>{this.state.count}</span>
          <button onClick={()=>this.changeCount(+1)}>+</button>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }

  changeCount(amount){
    this.setState(prevState => { // relies on previous state
      return {count: prevState.count + amount}
    })
    // this.setState( {count: 0}) // does not rely on previous state
  } 
}