import React from 'react';

const Offline = ({ onClick }) => {
  return (
    <div class='status'>
      <span className='status__text'>Offline</span>
      <button onClick={onClick} className='status__btn'>
        Reconnect
      </button>
    </div>
  );
};

export default Offline;
