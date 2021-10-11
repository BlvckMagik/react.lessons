import React, { Component } from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

class Status extends Component {
  state = {
    isOnline: false,
  };

  onClick = () => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    return (
      <div className='status'>
        {this.state.isOnline ? <Online /> : <Offline onClick={this.onClick} />}
      </div>
    );
  }
}

export default Status;
