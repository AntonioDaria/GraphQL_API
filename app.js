const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () =>{
    console.log('Listening for request on port 4000')
})


//1st step create express server app
//2nd Create a graphqlHTTP middleware and pass a schema to it