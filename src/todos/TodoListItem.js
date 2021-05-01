import React from 'react';
import styled from 'styled-components';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  const StyledText = todo.isCompleted ? StyledNormalText : StyledWarningText;
  return (
    <StyledItemLine>
      <StyledText createdAt={todo.createdAt}>{todo.text}</StyledText>
      <p>
        created at:&nbsp;
        {(new Date(todo.createdAt).toLocaleDateString())}
      </p>
      <div className="buttons-container">
        {todo.isCompleted
          ? null
          : <button
              onClick={() => onCompletedPressed(todo.id)}
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
};

const StyledItemLine = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNormalText = styled.span`
  font-size: 1em;
  line-height: 1.5em;
  margin-right: 1em;
`;

const StyledWarningText = styled(StyledNormalText)`
  color: ${props => (new Date(props.createdAt) < new Date(Date.now() - 8640000 * 2)) ? 'red' : 'black'};
`;

export default TodoListItem;