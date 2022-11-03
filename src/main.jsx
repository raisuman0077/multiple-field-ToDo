import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';


const DATA = [
  { id: "todo-0", name: "Wake Up!", completed: true },
  { id: "todo-1", name: "Get fresh", completed: false },
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);