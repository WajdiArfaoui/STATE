import React, { Component } from 'react'
import Counter from './Component/Counter'

export default class 
 extends Component {

  constructor(props) {
    super(props);
    this.state = {Show : false}
  };

    Toggle = () => {this.setState({Show : !this.state.Show})}
  
  render() {
    return (
      <div>
        <h1>WS COUNTER</h1>
        <button onClick={this.Toggle}>{this.state.Show ? "Hide" : "Show"}</button>
        {this.state.Show ? <Counter /> : null}
      </div>
    )
  }
}
