import React, { Component } from 'react'

export default class LifeCycleClassComponentMount extends Component {
  constructor(props) {
    super(props);
    alert("in constructor")
    this.state = {
      reactState: "inititalState"
    };
  }

  componentDidMount() {
    alert("in did mount")
    setTimeout(() => {
      this.setState({
        reactState: "updated in did mount"
      })
    }, 1000)
  }

  // static getDerivedStateFromProps(props, state) {
  //   alert("in getDerivedStateFromProps")
  //   return {
  //     reactState: props.updateState
  //   };
  // }

  render() {
    alert("in render")
    return (
      <div>
        <h1>React State value is {this.state.reactState}</h1>
      </div>
    )
  }
}
