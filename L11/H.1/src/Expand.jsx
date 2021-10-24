import React from 'react';

const Expand = ({ title, isOpen, children, onChange }) => {
  const icon = isOpen ? (
    <i className='fas fa-chevron-up'></i>
  ) : (
    <i className='fas fa-chevron-down'></i>
  );
  return (
    <div className='expand border'>
      <div className='expand__header'>
        <span className='expand__title'>{title}</span>
        <button className='expand__toggle-btn' onClick={onChange}>
          {icon}
        </button>
      </div>
      {isOpen ? <div className='expand__content'>{children}</div> : null}
    </div>
  );
};

export default Expand;
