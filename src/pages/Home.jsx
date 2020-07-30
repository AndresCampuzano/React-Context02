import React from 'react';
import Header from '../components/Header.jsx';
import Form from '../components/Form.jsx';
import ListTodos from '../components/ListTodos.jsx';

const Home = () => {
  return (
    <>
      <Header />
      <Form />
      <ListTodos />
    </>
  );
};

export default Home;
