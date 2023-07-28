import React, { Component } from 'react'

export default class LifeCycleClassComponentUpdate extends Component {
  constructor(props) {
    super(props);
    alert("in constructor")
    this.state = {
      reactState: "inititalState"
    };
  }

  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   if (nextState.reactState !== this.state.reactState) {
  //     console.log(`Count is about to update from ${this.state.reactState} to ${nextState.reactState}.`);
  //   }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    alert("in shouldComponentUpdate")
    // Only re-render if the favoriteFood state has changed
    return this.state.reactState !== nextState.reactState;
  }

  componentDidUpdate() {
    alert("inside did update")
  }
  
  changeReactState = () => {
    this.setState({ reactState: 'Updated after shouldComponent is true' });
  }

  componentWillUnmount() {
    alert("inside unmount")  
  }

  render() {
    alert("in render")
    return (
      <div>
        <h1>React State value is {this.state.reactState}</h1>
        <button type="button" onClick={this.changeReactState}>Change State</button>
      </div>
    )
  }
}