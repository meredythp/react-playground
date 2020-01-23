import React, { Component } from 'react';
// import Messages from './Messages';
import Tabs from './state/Tabs';

const tabsProp = [
  {
    name: 'First tab',
    content: 'Lorem ipsum dolor sit...'
  },
  {
    name: 'Second tab',
    content: 'Laboriosam exercitationem quos...'
  },
  {
    name: 'Third tab',
    content: 'Fugit, sapiente aspernatur...'
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs tabs={tabsProp} />
      </div>
    );
  }
}

export default App;