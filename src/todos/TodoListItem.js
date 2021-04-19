import React from 'react';
import styled from 'styled-components';

const TodoListItem = ({ todo }) => (
  <StyledItemLine className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
      <button className="completed-button">Mark As Completed</button>
      <button className="remove-button">Remove</button>
    </div>
  </StyledItemLine>
);

const StyledItemLine = styled.div`
  display: flex;
  align-items: center;
`

export default TodoListItem;