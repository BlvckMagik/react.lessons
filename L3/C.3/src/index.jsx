import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.jsx';
import './styles.scss';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars.githubusercontent.com/u/82097854?v=4',
};

const rootEl = document.querySelector('#root');

ReactDOM.render(
  <Comment author={userInfo} text='Good job!' date={new Date()} />,
  rootEl
);
