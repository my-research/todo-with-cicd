import React from 'react'
import styled from 'styled-components';

import TodoInput from "./TodoInput";
import TodoList from './TodoList';

export const Background = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #e9ecef;
`;

export const Container = styled.div`
  width: 512px;
  height: 768px;

  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #343a40;
`;

const Subtitle = styled.h2`
  font-size: 1rem;
  color: gray;
  padding-bottom: 30px;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid;
`;

const TodoPresenter = ({ todos, addAndSetTodos, deleteAndSetTodos }) => {

  return (
    <Background>
      <Container>
        <Title>평범한 Todo List 2</Title>
        <Subtitle>근데 이제, cicd pipeline 을 곁들인</Subtitle>
        <TodoInput addAndSetTodos={addAndSetTodos} />
        <TodoList todos={todos} deleteAndSetTodos={deleteAndSetTodos} />
      </Container>
    </Background>
  )
}

export default TodoPresenter
