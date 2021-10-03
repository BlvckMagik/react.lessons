import React from 'react';
import Avatar from './Avatar.jsx';

const UserInfo = props => {
  return (
    <div className='user-info'>
      <Avatar name={props.author} avatarUrl={props.author.avatarUrl} />
      <div className='user-info__name'>{props.author.name}</div>
    </div>
  );
};

export default UserInfo;
