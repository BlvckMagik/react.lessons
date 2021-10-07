import React, { Component } from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  changeColor = color => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className='colors'>
        <button
          onClick={() => this.changeColor(RED)}
          className='colors__button red'
        ></button>
        <button
          onClick={() => this.changeColor(GREEN)}
          className='colors__button green'
        ></button>
        <button
          onClick={() => this.changeColor(BLUE)}
          className='colors__button blue'
        ></button>
      </div>
    );
  }
}

export default Colors;
