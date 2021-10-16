import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'online',
    };
  }

  componentDidMount() {
    window.addEventListener('online', this.onlineEvent);
    window.addEventListener('offline', this.offlineEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onlineEvent);
    window.removeEventListener('offline', this.offlineEvent);
  }

  onlineEvent = () => {
    this.setState({
      status: 'online',
    });
  };

  offlineEvent = () => {
    this.setState({
      status: 'offline',
    });
  };

  render() {
    return this.state.status === 'online' ? (
      <div className='status'>Online</div>
    ) : (
      <div className='status status_offline'>Offline</div>
    );
  }
}

export default ConnectionStatus;
