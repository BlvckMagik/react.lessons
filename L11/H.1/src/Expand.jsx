import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Expand = ({ title, isOpen, children, onChange }) => {
  return (
    <div className='expand border'>
      <div className='expand__header'>
        <span className='expand__title'>{title}</span>
        <button onClick={onChange} className='expand__toggle-btn'>
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
      </div>
      {isOpen ? <div className='expand__content'>{children}</div> : null}
    </div>
  );
};

export default Expand;
