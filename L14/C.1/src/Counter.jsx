import React, { useState } from 'react';

const Counter = () => {
  const [count, changeCount] = useState(0);
  return (
    <div className='counter'>
      <button
        className='counter__button'
        onClick={() => changeCount(count - 1)}
      >
        -
      </button>
      <span className='counter__value' onClick={() => changeCount(0)}>
        {count}
      </span>
      <button
        className='counter__button'
        onClick={() => changeCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
