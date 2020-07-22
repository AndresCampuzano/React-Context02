import React, { useContext } from 'react';
import Item from './Item.jsx';
import { Context } from '../Context';

const ListTodos = () => {
  const [list] = useContext(Context);

  return (
    <div className='listTodos'>
      {list.map(info => (
        <Item item={info.item} key={info.id} id={info.id} />
      ))}
    </div>
  );
};

export default ListTodos;
