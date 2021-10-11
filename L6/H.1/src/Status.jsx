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
    if (this.state.isOnline) return <Online />;
    return <Offline onClick={this.onClick} />;
  }
}

export default Status;
