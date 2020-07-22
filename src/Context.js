import React, { useState, createContext } from 'react';

export const Context = createContext();

export const ContextTodo = props => {
  const [list, setList] = useState([
    {
      item: 'Milk',
      id: 4561278
    },
    {
      item: 'Eggs',
      id: 5640024
    },
    {
      item: 'Bread',
      id: 1047996
    }
  ]);
  return (
    <Context.Provider value={[list, setList]}>
      {props.children}
    </Context.Provider>
  );
};
