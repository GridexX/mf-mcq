import React from 'react';

export default function Question({ props }) {
  const number = props.number;
  return (

    <div>
      <h1>Question n°{number}</h1>
      <p>What is the output of the following code?</p>
      <code >
        const a = 1;
        const b = 2;
        const c = 3;
        console.log(a%2+b*19+c);

      </code>
    </div>
  )
}
