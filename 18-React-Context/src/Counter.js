import React from 'react';

import { useCount } from './CountContext';

const Counter = () => {
  // set dispatch and state count from useCount()

  return (
    <>
      {/* change 0 with count from context */}
      Count: 0
      <div>
        {/* use dispatch for onClick method */}
        <button className="count-button" onClick={() => { }} >+</button>
        <button className="count-button" onClick={() => { }}>-</button>
      </div>
    </>
  );
}

export default Counter;