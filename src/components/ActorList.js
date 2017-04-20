import React from 'react'

import ActorItem from './ActorItem'

//TODO add loading sign
const ActorList = ({ actors }) => (
  <ol>
    {actors.map( (actor, i) => (
      <li key={i}>
        <ActorItem actor={actor} />
      </li>
    ))}
  </ol>
)

export default ActorList
