import React from 'react';

class Tabs extends React.Component {
  static defaultProps = {
    tabs: []
  };

  state = {
    currentTabIndex: 0
  };
  // initial state of button. no content showing.
  // state = {}

  // function for secondary state of button. this will be in DidMount.
  // showContent() {}

  // secondary state of button.
  // componentDidMount() {
  //  this.showContent();
  // }

  // tertiary state of button. close old button when any button is clicked.
  // componentWillUnmount () {
  //  
  // }

  // conditions.
  // if same button is clicked, nothing happens.
  // if different button is clicked, content opens.
  handleButtonClick(index) {
    this.setState({ currentTabIndex: index })
  }

  renderButtons() {
    return this.props.tabs.map((tab, index) => (
      <button key={index} onClick={() => this.handleButtonClick(index)}>
        {tab.name}
      </button>
    ))
  }

  renderContent() {
    const currentTab = this.props.tabs[this.state.currentTabIndex]
    return (
      <div className="content">
        {currentTab.content}
      </div>
    )
  }

  render() {
    return (
      <div className="button-div">
        {this.renderButtons()}
        {!!this.props.tabs.length && this.renderContent()}
      </div>
    )
  }u
}

export default Tabs;