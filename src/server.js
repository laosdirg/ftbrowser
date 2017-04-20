const express = require('express')
const graphqlHTTP = require('express-graphql')
const {
  graphql,
  buildSchema,
} = require('graphql')
const { addResolveFunctionsToSchema } = require('graphql-tools')
const xml2js = require('xml2js')
const axios = require('axios');

var app = express()
let port = 4000
var BASE_URL = 'http://oda.ft.dk/api/'


/* Queries we want
{ actors(typeid: int) {
  id
  name
  biography
  }
}
{actortypes}
{actor(id)} or {actorrelations} that gets all relations to the actor with id
{cases(typeid)}
{casetypes}
...
{searchactors(query)}
{searchcases(query)}
...
*/
var schema = buildSchema(`
  type ActorType {
    id: Int,
    type: String,
    biography: String
  }

  type Actor {
    id: Int,
    name: String
  }

  type Query {
    actors(typeid: Int): [Actor],
    actortypes: [ActorType]
  }
`);

class Actor {
  constructor(id, name) {
    this.id = id,
    this.name = name
  }
}

class ActorType {
  constructor(id, type) {
    this.id = id
    this.type = type
  }
}

// the root supplies the resolvers for the different queries
var root = {

  actors: ({typeid}) => {
    let url = BASE_URL + 'Akt%C3%B8r?$filter=typeid%20eq%20' + typeid
    let extractFields = (actor) => ([
      actor.id,
      actor.navn
    ])
    return axios.get(url).then(
      response => response.data.value.map( (actor) => new Actor(...extractFields(actor)) )
    ).catch( error => {console.log(error)} )
  },

  actortypes: () => {
    let url = BASE_URL + 'Akt%C3%B8rtype?'
    let extractFields = (actortype) => ([
      actortype.id,
      actortype.type
    ])
    // TODO: maybe generalize this function
    return axios.get(url).then(
      response => response.data.value.map( (actortype) => new ActorType(...extractFields(actortype)) )
    ).catch( error => {console.log(error)} )
  }

}

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port)
