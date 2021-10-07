import React, { Component } from 'react';

class GoodButton extends Component {
  onClick(event) {
    alert(event.target.textContent);
  }

  render() {
    return (
      <button onClick={this.onClick} className='fancy-button'>
        Good Button
      </button>
    );
  }
}

export default GoodButton;
