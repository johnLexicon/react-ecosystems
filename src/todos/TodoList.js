import React from 'react'
import NewTodoForm from './NewTodoForm'
import TodoItem from './TodoItem'

const TodoList = ({ todos = [] }) => {
  return (
    <>
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </>
  )
}

export default TodoList
