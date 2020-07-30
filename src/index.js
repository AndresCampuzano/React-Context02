import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ContextTodo } from './Context';

ReactDOM.render(
  <React.StrictMode>
    <ContextTodo>
      <App />
    </ContextTodo>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
