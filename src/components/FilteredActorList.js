import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchActors } from '../actions'
import ActorList from './ActorList'

class FilteredActorList extends Component {

  componentDidMount() {
    const { dispatch, filters } = this.props
    dispatch(fetchActors(filters.active))
  }

  componentDidUpdate(prevProps) {
    const { dispatch, filters } = this.props
    if (prevProps.filters.active !== filters.active) {
      dispatch(fetchActors(filters.active))
    }
  }

  render() {
    const { actors, filters } = this.props
    return (
      <div>
        {actors.isFetching && actors.items.length === 0 &&
          <h2>Loader...</h2>
        }
        {!actors.isFetching && actors.items.length === 0 &&
          <h2>Tom.</h2>
        }
        {actors.items.length > 0 &&
          <ActorList actors={ actors.items }/>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { actors, filters } = state
  return { actors, filters }
}

export default connect(mapStateToProps)(FilteredActorList)
