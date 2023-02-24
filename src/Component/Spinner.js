import React, { Component } from 'react'
import loading from "./giphy.gif"
export default class Spinner extends Component {
    mystyle={
        height:'80px',
        width:'80px'
    }
  render() {
    return (
      <div className='text-center'>
        <img src={loading} style={this.mystyle} ></img>
      </div>
    )
  }
}
