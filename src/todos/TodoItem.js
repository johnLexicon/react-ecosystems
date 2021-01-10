import React from 'react'

const TodoItem = ({ todo, onRemovePressed }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="button-container">
        <button className="completed-button">Mark as completed</button>
        <button
          className="remove-button"
          onClick={() => {
            onRemovePressed(todo.id)
          }}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default TodoItem
