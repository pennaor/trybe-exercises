import React from 'react';

function writer(text) {
  return `Hello, ${text}`;
}

function getFirstElement() {
  const element = React.createElement('h1', null, writer('my friend!'));
  return element;
}

class FirstClass extends React.Component {
  render() {
    return <h2>Alooou</h2>;
  }
}

export { FirstClass, getFirstElement };
