// @flow
import React from 'react';

type NumberFn = () => void

type PropTypes = {
  counter: number,
  inc: NumberFn,
  dec: NumberFn,
};


const Counter = ({ counter, inc, dec }: PropTypes): React$Element<*> =>
  <div>
    <button onClick={dec}>-</button>
    {counter}
    <button onClick={inc}>+</button>
  </div>;

export default Counter;
