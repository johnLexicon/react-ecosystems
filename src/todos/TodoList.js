import React from 'react'
import { connect } from 'react-redux'
import { removeTodo, completeTodo } from './actions'
import { displayAlert } from './thunks'
import NewTodoForm from './NewTodoForm'
import TodoItem from './TodoItem'

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed, onDisplayAlertClicked }) => {
  return (
    <>
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onDisplayAlertClicked}
        />
      ))}
    </>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodo(id)),
  onCompletePressed: (id) => dispatch(completeTodo(id)),
  onDisplayAlertClicked: () => dispatch(displayAlert()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
