import React from 'react';

const onClick = () => {
  alert('Good job!');
};

const GoodButton = () => {
  return (
    <button onClick={onClick} className='fancy-button'>
      Good Button
    </button>
  );
};

export default GoodButton;
