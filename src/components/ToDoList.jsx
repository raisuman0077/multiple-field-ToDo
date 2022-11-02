import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
  const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div className='todo-section'>
      <h1>Your To-Do Lists</h1>
      <TodoForm onSubmit={addTodo} />
      {todos.map((todo, index) => (
          <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
          >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
          </div>
          <div className='icons'>
          <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
          />
          <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
          />
          </div>
          </div>
          ))
        }
    </div>
  );
}

export default ToDoList;