import React, { Component } from 'react';
import Message from './Message.jsx';

class Page extends Component {
  state = {
    text: null,
  };

  onClick = text => {
    this.setState({
      text,
    });
  };

  render() {
    return (
      <div className='page'>
        <Message text={this.state.text} />
        <div className='actions'>
          <button onClick={() => this.onClick('Hello world!')} className='btn'>
            Text 1
          </button>
          <button
            onClick={() => this.onClick('Another exciting text.')}
            className='btn'
          >
            Text 2
          </button>
          <button onClick={() => this.onClick(null)} className='btn'>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
