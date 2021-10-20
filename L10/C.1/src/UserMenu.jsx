import React from 'react';

const UserMenu = ({ userData }) => {
  return (
    <header class='header'>
      <div class='menu'>
        <span class='menu__greeting'>Hello, {userData.name}</span>
        <img alt='User Avatar' src={userData.avatar_url} class='menu__avatar' />
      </div>
    </header>
  );
};

export default UserMenu;
