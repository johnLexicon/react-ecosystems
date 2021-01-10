import React from 'react'
import { connect } from 'react-redux'
import { removeTodo } from './actions'
import NewTodoForm from './NewTodoForm'
import TodoItem from './TodoItem'

const TodoList = ({ todos = [], onRemovePressed }) => {
  return (
    <>
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemovePressed={onRemovePressed} />
      ))}
    </>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
