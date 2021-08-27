import React, { useState } from 'react'
import styled from 'styled-components';

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 14px;
  box-sizing: border-box;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 12px;
  margin: 25px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 14px;
  box-sizing: border-box;
  cursor: pointer;

  transition: 0.5s ease;

  :hover {
    background-color: #fff;
	  border-color: #59b1eb;
	  color: #59b1eb;
  }
`;

const TodoInput = ({ addAndSetTodos }) => {

  const [text, setText] = useState("");

  const handleChangeTextBox = (e) => {
    const { value } = e.target;

    setText(value);
  }

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleOnClickAddButton();
    }
  }

  const handleOnClickAddButton = () => {
    if (text === "") {
      alert("값을 입력하세요");
    } else {
      addAndSetTodos(text);
      setText("");
    }
  }

  return (
    <>
      <InputWrapper>
        <Input placeholder="새로운 Todo 를 입력하세요" value={text} onChange={handleChangeTextBox} onKeyPress={handleOnKeyPress} />
        <Button onClick={handleOnClickAddButton}>추가 하기</Button>
      </InputWrapper>
    </>
  )
}

export default TodoInput
