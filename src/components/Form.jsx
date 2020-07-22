import React, { useState, useContext } from 'react';
import { Context } from '../Context';

const Form = () => {
  const [list, setList] = useContext(Context);
  const [task, setTask] = useState('');

  const updateTask = e => {
    setTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setList([
      ...list,
      {
        item: task,
        id: Math.floor(Math.random() * 9999999)
      }
    ]);
    setTask(''); // Cleaning input
  };
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='task'>Type task</label>
        <input
          type='text'
          name='task'
          id='task'
          value={task}
          onChange={updateTask}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default Form;
