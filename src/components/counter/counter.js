// @flow
import React from 'react';

type Dispatcher = () => void

type PropTypes = {
  counter: CounterState,
  inc: Dispatcher,
  dec: Dispatcher,
};


const Counter = ({ counter, inc, dec }: PropTypes): React$Element<*> =>
  <div>
    <button onClick={dec}>-</button>
    {counter}
    <button onClick={inc}>+</button>
  </div>;


export default Counter;
