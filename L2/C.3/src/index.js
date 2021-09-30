import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootEl = document.querySelector('#root');

const renderClock = time => {
  const seconds = new Date(time).getSeconds();

  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
  const textColor = seconds % 2 !== 0 ? '#fff' : '#000';

  const styles = {
    color: textColor,
    backgroundColor,
  };

  const elem = (
    <div className='seconds' style={styles}>
      Now is {seconds}
    </div>
  );
  ReactDOM.render(elem, rootEl);
};

setInterval(() => {
  renderClock(new Date());
}, 1000);
