import React from 'react';

const UserForm = ({ userData, handleChange }) => {
  return (
    <form class='user-form'>
      <input
        onChange={handleChange}
        type='text'
        name='firstName'
        class='user-form__input'
        value={userData.firstName}
      />
      <input
        onChange={handleChange}
        type='text'
        name='lastName'
        class='user-form__input'
        value={userData.lastName}
      />
    </form>
  );
};

export default UserForm;
