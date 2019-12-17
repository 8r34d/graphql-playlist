require('dotenv').config()

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPass}@${dbHost}`, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
mongoose.connection.once('open', () => {
  console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`now listening for requests on port ${PORT}`);
});
