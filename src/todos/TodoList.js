import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import styled from 'styled-components';
import {
    getTodosLoading,
    getIncompleteTodos,
    getCompleteTodos,
} from './selectors';
import { connect } from 'react-redux';
import { loadTodos, removeTodoRequest, completeTodoRequest } from './thunks';

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos();
  },[]);

  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h3>Incomplete:</h3>
      {incompleteTodos.map(todo => 
        <TodoListItem
          key={todo.text}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      )}
        <h3>Completed:</h3>
      {completedTodos.map(todo => 
        <TodoListItem
          key={todo.text}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      )}
    </ListWrapper>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompleteTodos(state),
  incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(completeTodoRequest(id)),
});

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);