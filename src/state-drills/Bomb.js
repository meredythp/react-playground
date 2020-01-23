import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(
        ({ count }) => ({ count: count + 1 })
      )
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  tickTock() {
    const { count } = this.state
    if (count >= 8) {
      clearInterval(this.interval)
      return "BOMB!!!"
    } else if (count % 2 === 0) {
      return "tick"
    } else {
      return "tock"
    }
  }

  render() {
    return (
        <div className="Bomb-div">
          {this.tickTock()}
        </div>
    )
  }
}

export default Bomb;