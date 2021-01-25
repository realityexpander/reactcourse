import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    return (
      <div>
      <button>-</button>
      <span>{this.props.initialCount}</span>
      <button>+</button>
    </div>
    )
  }
}