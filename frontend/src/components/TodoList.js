import React from 'react'
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteAndSetTodos }) => {
  return (
    <>
      {todos.map((todo, index) =>
        <TodoItem key={index} todo={todo} deleteAndSetTodos={deleteAndSetTodos} />
      )}
    </>
  );
}

export default TodoList
