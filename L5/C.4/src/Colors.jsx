import React, { Component } from 'react';

class Colors extends Component {
  changeColor = color => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className='colors'>
        <button
          onClick={this.changeColor.bind(this, 'red')}
          className='colors__button red'
        ></button>
        <button
          onClick={this.changeColor.bind(this, 'green')}
          className='colors__button green'
        ></button>
        <button
          onClick={this.changeColor.bind(this, 'blue')}
          className='colors__button blue'
        ></button>
      </div>
    );
  }
}

export default Colors;
