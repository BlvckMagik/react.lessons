import React from 'react';

const Offline = ({ onClick }) => {
  return (
    <>
      <span className='status__text'>Offline</span>
      <button onClick={onClick} className='status__btn'>
        Reconnect
      </button>
    </>
  );
};

export default Offline;
