import React, { useEffect, useState } from 'react'

import TodoPresenter from "./components/TodoPresenter";

import { fetchTodos, addTodo, deleteTodo } from "./util/service";

const App = () => {

  const [todos, setTodos] = useState([]);

  const fetchAndSetTodos = async () => {
    const data = await fetchTodos();
    setTodos(data);
  }

  const addAndSetTodos = async (todo) => {
    const data = await addTodo(todo);
    setTodos(todos.concat(data));
  }

  const deleteAndSetTodos = async (id) => {
    const { data: removedTodo } = await deleteTodo(id);
    setTodos(todos.filter(todo => todo.id !== removedTodo));
  }

  useEffect(() => {
    fetchAndSetTodos();
  }, []);

  return (
    <TodoPresenter
      todos={todos}
      addAndSetTodos={addAndSetTodos}
      deleteAndSetTodos={deleteAndSetTodos} />
  );
}

export default App
