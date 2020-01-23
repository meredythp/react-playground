import React from "react";

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  }

  state = {
    chamber: null,
    spinningTheChamber: false,
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }
  
  handleClick = () => {
    this.setState(state => ({
      spinningTheChamber: !state.spinningTheChamber
    }))
    
    this.timeout = setTimeout(() => {
      let randomChamber = Math.floor(Math.random() * 8) + 1;
      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false
      })
    }, 2000)
  }

  renderDisplay() {
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    const loaded = chamber === null;
    const spinning = spinningTheChamber === true;
    const bang = chamber === bulletInChamber;
    const safe = "You're safe!";

    if (loaded) {
      return "You're loaded...";
    } else if(spinning) {
      return "Spinning the chamber and pulling the trigger!"
    } else if (bang) {
      return "Bang!!!"
    } else {
      return safe
    }
  }

  render() {
    return (
      <div className="RouletteGun-div">
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleClick}>
          Pull the trigger!
        </button>
      </div>
    )
  }
}

export default RouletteGun;
