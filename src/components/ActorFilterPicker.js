import React from 'react'

//TODO: make this component get from {actortypes} endpoint
const ActorFilterPicker = ({onClick}) => (
  <div>
    <a href='#' onClick={ (e) => {e.preventDefault; onClick(5)} }>
      Personer
    </a>
    <a href='#' onClick={ (e) => {e.preventDefault; onClick(3)} }>
      Udvalg
    </a>
  </div>
)


export default ActorFilterPicker
