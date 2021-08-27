import React from 'react'

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px;
`;

const List = styled.li`
  list-style: none;
  margin: 0 15px;
`;

const Button = styled.button`
  margin: 0 15px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 12px;
  box-sizing: border-box;

  transition: 0.5s ease;

  :hover {
    background-color: #fff;
	  border-color: #59b1eb;
	  color: #59b1eb;
  }
`;

const TodoItem = ({ todo, deleteAndSetTodos }) => {

  const { id, content } = todo;

  console.log(id);

  return (
    <Container>
      <List>[ {content} ]</List>
      <Button onClick={() => deleteAndSetTodos(id)}>삭제</Button>
    </Container>
  )
}

export default TodoItem
