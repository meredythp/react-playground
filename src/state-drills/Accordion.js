import React from 'react';
import './Accordion.css'

class Accordion extends React.Component {
  static defaultProps = {
    sections: [],
  }

  state = {
    currentSectionIndex: null,
  };

  HandleButtonClick(index) {
    this.setState({
      currentSectionIndex: index,
    })    
  }

  /* DisplayContent(index) {
    let classState = index === this.state.currentSectionIndex ? "block" : "none";
    return classState
  } */

  Item(section, index) {
    return (
      <li key={index}>
        <button onClick={() => this.HandleButtonClick(index)}>
            {section.title}
        </button>
        {/* <div id="content" className={this.DisplayContent(index)}> */}
        {this.props.sections.length > 0 && index === this.state.currentSectionIndex && <div className="content"><p>{section.content}</p></div>}
        {/* </div> */}
      </li>
    )
  }

  render() {
    return (
      <div className="section-wrapper">
        <ul className="main-ul">
          {this.props.sections.map((section, index) => (
            this.Item(section, index)
          ))}
        </ul>
      </div>
    )
  }
}

export default Accordion;