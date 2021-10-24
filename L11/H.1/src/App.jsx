import React, { Component } from 'react';
import Expand from './Expand.jsx';

class App extends Component {
  state = {
    isOpen: false,
  };

  onChange = () => {
    this.state.isOpen
      ? this.setState({ isOpen: false })
      : this.setState({ isOpen: true });
  };

  render() {
    return (
      <div className='app'>
        <Expand
          isOpen={this.state.isOpen}
          onChange={this.onChange}
          title='Some title'
        >
          <p>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
