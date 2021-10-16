import React, { Component } from 'react';
import Clock from './Clock.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hide: false,
    };
  }

  changeState = () => {
    this.setState({
      hide: true,
    });
  };

  render() {
    return this.state.hide ? (
      ''
    ) : (
      <>
        <button className='button' onClick={this.changeState}>
          Hide
        </button>
        <Clock location='London' offset={0} />
        <Clock location='Kyiv' offset={2} />
        <Clock location='New York' offset={-5} />
      </>
    );
  }
}

export default App;
