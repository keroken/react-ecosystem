import { LOAD_TODOS_SUCCESS, LOAD_TODOS_FAILURE, LOAD_TODOS_IN_PROGRESS, loadTodosInProgress, loadTodosSuccess, loadTodosFailure } from './actions';

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch('http://loaclhost:8080/todos');
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e));
  }
  
}

export const displayAlert = text => () => {
  alert(text);
};