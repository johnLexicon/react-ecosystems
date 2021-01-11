import React from 'react'

const TodoItem = ({ todo, onRemovePressed, onCompletePressed }) => {
  return (
    <div className="todo-item-container">
      <h3 className={todo.isCompleted ? 'is-completed' : ''}>{todo.text}</h3>
      <div className="button-container">
        {!todo.isCompleted && (
          <button className="completed-button" onClick={() => onCompletePressed(todo.id)}>
            Mark as completed
          </button>
        )}
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
