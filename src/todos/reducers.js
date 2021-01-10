import { CREATE_TODO, REMOVE_TODO, COMPLETE_TODO } from './actions'
export const todos = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case CREATE_TODO: {
      const { text } = payload
      return state.concat({ id: String(Date.now()), text, completed: false })
    }
    case REMOVE_TODO: {
      const { id } = payload
      return state.filter((todo) => todo.id !== id)
    }
    case COMPLETE_TODO: {
      const { id } = payload
      return state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: true }
        }
        return todo
      })
    }
    default:
      return state // IMPORTANT! Always return the state if the action is not met by any action type handled by the reducer.
  }
}
