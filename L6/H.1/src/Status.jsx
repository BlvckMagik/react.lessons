import React, { Component } from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

class Status extends Component {
  state = {
    isOnline: true,
  };

  //   onClick = () => {
  //     this.setState({
  //       isOnline: true,
  //     });
  //   };
  // onClick={this.onClick}

  render() {
    if (this.state.isOnline) return <Online />;
    return <Offline />;
  }
}

export default Status;
