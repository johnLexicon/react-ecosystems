import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure, createTodo } from './actions'

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

export const addTodo = (text) => async (dispatch, getState) => {
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

export const displayAlert = (text) => () => {
  alert(text)
}
