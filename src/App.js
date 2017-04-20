import React, { Component } from 'react'
import { connect } from 'react-redux'

import FilteredActorList from './components/FilteredActorList'
import ActorFilterPicker from './components/ActorFilterPicker'
import { changeFilter } from './actions'

import './App.css'

class App extends Component {
  render() {
    const { onClick } = this.props
    return (
      <div className="App">
        <ActorFilterPicker onClick={ onClick }/>
        <FilteredActorList />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // empty for now
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (typeid) => {
      dispatch(changeFilter(typeid))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
