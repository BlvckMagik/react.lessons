import React, { Component } from 'react';

class Toggler extends Component {
  constructor() {
    super();

    this.state = {
      text: 'Off',
    };
  }

  toggleText = () => {
    if (this.state.text === 'Off')
      this.setState({
        text: 'On',
      });
    else
      this.setState({
        text: 'Off',
      });
  };

  render() {
    return (
      <button onClick={() => this.toggleText()} className='toggler'>
        {this.state.text}
      </button>
    );
  }
}

export default Toggler;
