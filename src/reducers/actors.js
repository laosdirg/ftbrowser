import {
  REQUEST_ACTORS, RECEIVE_ACTORS
} from '../actions'

let initialState = {
  isFetching: false,
  items: []
}

const actors = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ACTORS:
      return {
        ...state, isFetching: true
      }
    case RECEIVE_ACTORS:
      return {
        ...state, items: action.actors, isFetching: false
      }
    default:
      return state
  }
}

export default actors
