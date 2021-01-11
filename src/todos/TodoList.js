import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadTodos, removeTodoRequest, displayAlert, completeTodoRequest } from './thunks'
import { getTodos, getIsLoading } from './selectors'
import NewTodoForm from './NewTodoForm'
import TodoItem from './TodoItem'

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos()
  }, [])

  return (
    <>
      <NewTodoForm />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed} />
        ))
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
  todos: getTodos(state),
})

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletePressed: (id) => dispatch(completeTodoRequest(id)),
  onDisplayAlertClicked: () => dispatch(displayAlert()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
