import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { removeTodo, completeTodo } from './actions'
import { loadTodos, displayAlert } from './thunks'
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
  isLoading: state.isLoading,
  todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodo(id)),
  onCompletePressed: (id) => dispatch(completeTodo(id)),
  onDisplayAlertClicked: () => dispatch(displayAlert()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
