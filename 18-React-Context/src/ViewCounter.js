import React from 'react';

import { useCount } from './CountContext'

const ViewCounter = () => {
  // set state count from useCount
  return (
    <div>
      {/* change 0 with count from context */}
      Count is 0
    </div>
  );
}

export default ViewCounter;