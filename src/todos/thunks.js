import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  completeTodo,
} from './actions'

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress)
    const response = await fetch('http://localhost:8080/todos-delay')
    const todos = await response.json()

    dispatch(loadTodosSuccess(todos))
  } catch (err) {
    dispatch(loadTodosFailure())
    dispatch(displayAlert(err.message))
  }
}

export const addTodoRequest = (text) => async (dispatch, getState) => {
  try {
    const body = JSON.stringify({ text })
    const response = await fetch('http://localhost:8080/todos', {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'post',
      body,
    })
    const todo = await response.json()
    dispatch(createTodo(todo))
  } catch (err) {
    dispatch(displayAlert(err.message))
  }
}

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8080/todos/' + id, {
      method: 'delete',
    })
    const removedTodo = await response.json()
    dispatch(removeTodo(removedTodo))
  } catch (err) {
    dispatch(displayAlert(err.message))
  }
}

export const completeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
      method: 'post',
    })
    const todo = await response.json()
    dispatch(completeTodo(todo))
  } catch (err) {
    dispatch(displayAlert(err.message))
  }
}

export const displayAlert = (text) => () => {
  alert(text)
}
