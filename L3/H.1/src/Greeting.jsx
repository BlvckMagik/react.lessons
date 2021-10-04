import React from 'react';

const Greeting = props => {
  console.log(new Date(props.birthDate).getFullYear());
  return (
    <div className='greeting'>
      {`My name is ${props.firstName} ${props.lastName}. I'm
      ${new Date().getFullYear() - new Date(props.birthDate).getFullYear()}
      years old`}
    </div>
  );
};

export default Greeting;
