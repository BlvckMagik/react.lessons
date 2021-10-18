import React, { Component } from 'react';

class Search extends Component {
  state = {
    value: '',
  };

  onValChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  search = event => {
    event.preventDefault();
    console.log(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form onSubmit={this.search} className='search'>
        <input
          onChange={this.onValChange}
          type='text'
          className='search__input'
        />
        <button className='search__button'>Search</button>
      </form>
    );
  }
}

export default Search;
