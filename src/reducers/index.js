import { combineReducers } from 'redux'

import filters from './filters'
import actors from './actors'

const rootReducer = combineReducers({
  filters,
  actors
})

export default rootReducer
