import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    name: '',
    student: '',
    occupation: '',
    about: '',
  };

  handleChange = e => {
    const { name, value, type, checked } = e.target;

    const val = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: val,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className='login-form' onSubmit={this.onSubmit}>
        <h1 className='form-title'>Profile</h1>
        <div className='form-control'>
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input
            onChange={this.handleChange}
            className='form-input'
            type='text'
            id='name'
            name='name'
            value={this.state.name}
          />
        </div>
        <div className='form-control'>
          <label className='form-label' htmlFor='student'>
            Student
          </label>
          <input
            onChange={this.handleChange}
            className='form-input'
            type='checkbox'
            id='student'
            name='student'
          />
        </div>
        <div className='form-control'>
          <label className='form-label' id='occupation' htmlFor='occupation'>
            Occupation
          </label>
          <select
            name='occupation'
            onChange={this.handleChange}
            className='form-input'
          >
            <option value='london'>London</option>
            <option value='new-york'>New York</option>
            <option value='coconut'>Sidney</option>
            <option value='mango'>Berlin</option>
          </select>
        </div>
        <div className='form-control'>
          <label className='form-label' id='about' htmlFor='about'>
            About
          </label>
          <textarea
            name='about'
            className='form-input'
            onChange={this.handleChange}
            value={this.state.about}
          />
        </div>
        <button className='submit-button' type='submit'>
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
