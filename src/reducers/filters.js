import { CHANGE_FILTER } from '../actions'

const intialFilter = {
  active: 5
}

const filters = (state = intialFilter, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, active: action.active }
    default:
      return state
  }
  return state
}

export default filters
