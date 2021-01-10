import { CREATE_TODO, REMOVE_TODO } from './actions'
export const todos = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case CREATE_TODO: {
      const { text } = payload
      return state.concat({ text, completed: false })
    }
    case REMOVE_TODO: {
      const { id } = payload
      return state.filter((todo) => todo.id !== id)
    }
    default:
      return state // IMPORTANT! Always return the state if the action is not met by any action type handled by the reducer.
  }
}
