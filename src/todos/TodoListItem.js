import React from 'react';
import styled from 'styled-components';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
  <StyledItemLine className="todo-item-container">
    <StyledText>{todo.text}</StyledText>
    <div className="buttons-container">
      {todo.isCompleted
        ? null
        : <button
            onClick={() => onCompletedPressed(todo.text)}
            className="completed-button">Mark As Completed</button>
      }
      <button
        onClick={() => onRemovePressed(todo.id)} 
        className="remove-button"
      >
        Remove
      </button>
    </div>
  </StyledItemLine>
);

const StyledItemLine = styled.div`
  display: flex;
  align-items: center;
`

const StyledText = styled.span`
  font-size: 1em;
  line-height: 2em;
`;

export default TodoListItem;