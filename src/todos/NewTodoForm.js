import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodoRequest } from './thunks'
import { getTodos } from './selectors'

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('')
  return (
    <div className="new-todo-form">
      <input
        type="text"
        placeholder="Type your new todo here"
        className="new-todo-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="new-todo-button"
        onClick={() => {
          const duplicateText = todos.some((t) => t.text.toLowerCase() === inputValue.toLowerCase())
          if (!duplicateText) {
            onCreatePressed(inputValue)
            setInputValue('')
          }
        }}
      >
        Create Todo
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: getTodos(state),
})
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)
