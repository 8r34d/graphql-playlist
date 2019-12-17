const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  // ES6 as both names are the same
  // schema: schema
  schema
}));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`now listening for requests on port ${PORT}`);
});
