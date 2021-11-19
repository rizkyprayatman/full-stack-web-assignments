import React from 'react';
import { createContext, useContext, useReducer } from 'react';

const CountContext = createContext();

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      // code here
    }
    case 'decrement': {
      // code here
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const CountProvider = ({ children }) => {
  // useReducer

  // Make variable `value` and assign state & dispatch

  return <CountContext.Provider>{children}</CountContext.Provider>
}

const useCount = () => {
  // fill the default value of useContext
  const context = useContext();

  if (context === 'undefined') {
    throw new Error('useCount must be used within a CountProvider')
  }

  return context;
}

export { CountProvider, useCount } 