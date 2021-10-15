import React, { Component } from 'react';

class Life extends Component {
  constructor() {
    super();
    console.log('constructor: good place to create state');

    this.state = {
      text: null,
    };
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      'shouldComponentUpdate(nextProps, nextState): decide to render or not to render'
    );
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      'componentDidUpdate(prevProps, prevState): some updates based on new props'
    );
  }

  componentWillUnmount() {
    console.log(
      'componentWillUnmount(): cleanup before DOM related to component will be removed'
    );
  }

  showText = text => {
    this.setState({
      text,
    });
  };

  render() {
    console.log('return React element to build DOM');
    return (
      <>
        <button
          className='button'
          onClick={() => this.showText(`Oh shit, I'm sorry`)}
        >
          Show Text
        </button>
        {this.state.text && <div className='text'>{this.state.text}</div>}
      </>
    );
  }
}

export default Life;
