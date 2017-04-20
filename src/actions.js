// -----------------ACTORS---------------------------
export const REQUEST_ACTORS = 'REQUEST_ACTORS'
function requestActors() {
  return {
    type: REQUEST_ACTORS
  }
}

export const RECEIVE_ACTORS = 'RECEIVE_ACTORS'
function receiveActors(actors) {
  return {
    type: RECEIVE_ACTORS,
    actors: actors,
    receivedAt: Date.now()
  }
}

export const fetchActors = (typeid) => (dispatch) => {
  dispatch(requestActors())
  let options = {
    method: 'GET'
  }
  let query = 'query={actors(typeid:' + typeid + '){id,name}}'
  return fetch('/graphql?' + query, options)
    .then(response => response.json())
    .then(json => dispatch(receiveActors(json.data.actors)))
}

// -----------------FILTER---------------------------
export const CHANGE_FILTER = 'CHANGE_FILTER'
export const changeFilter = (filter) => {
  return {
    type: CHANGE_FILTER,
    active: filter
  }
}
