import React from 'react';
import Header from '../components/Header.jsx';
import Form from '../components/Form.jsx';
import ListTodos from '../components/ListTodos.jsx';
import { ContextTodo } from '../Context';

const Home = () => {
  return (
    <ContextTodo>
      <Header />
      <Form />
      <ListTodos />
    </ContextTodo>
  );
};

export default Home;
