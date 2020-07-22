import React, { useContext } from 'react';
import { Context } from '../Context';

const Header = () => {
  const [list] = useContext(Context);
  return (
    <header>
      <h1>To Do list - Context</h1>
      <h3>Tasks counter: {list.length}</h3>
    </header>
  );
};

export default Header;
