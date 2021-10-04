import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting.jsx';
import './index.scss';

const rootEl = document.querySelector('#root');

ReactDOM.render(
  <Greeting
    firstName='John'
    lastName='Doe'
    birthDate={new Date(2001, 1, 1, 11, 11.819)}
  />,
  rootEl
);
