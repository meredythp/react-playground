import React, { Component } from "react";

class HelloWorld extends Component {
  state = {
    who: "World"
  }

  handleClick = () => {
      this.setState({
      who: "World"
    })
  }

  handleClickTwo = () => {
    this.setState({
      who: "Friend"
    })
  }
  
  render() {
    return (
      <main className="HelloWorld">
        <header className="HelloWorld-header">
          <p>Hello, {this.state.who}!</p>
        </header>
        <button onClick={this.handleClick}>
          World
        </button>
        <button onClick={this.handleClickTwo}>
          Friend
        </button>
        <button onClick={() => {
          return this.setState({
            who: "React"
          })
        }}>
          React
        </button>
      </main>
    )
  }
}

export default HelloWorld;