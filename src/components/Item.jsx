import React, { useContext } from 'react';
import { Context } from '../Context';

const Item = ({ item, id }) => {
  const [list, setList] = useContext(Context);
  const handleDelete = () => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  };
  return (
    <div className='item'>
      <p>{item}</p>
      <button type='button' onClick={handleDelete}>
        DELETE
      </button>
    </div>
  );
};

export default Item;
