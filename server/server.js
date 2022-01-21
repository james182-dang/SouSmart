const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const http = require('http');
// const routes = require('./routes');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;


// async function startApolloServer(typeDefs, resolvers) {


//     const httpServer = http.createServer(app);

//     const server = new ApolloServer({
//         typeDefs,
//         resolvers,
//         plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
//     });

//     await server.start();

//     server.applyMiddleware({ app });

//     await new Promise(resolve => httpServer.listen({ port: 3001 }, resolve));

//     console.log(`Server ready at http://localhost:3001${server.graphqlPath}`)
// }

// startApolloServer();

// app.use('/graphql', graphqlHTTP({
//     schema: schema,
// }));

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });

  await server.start();

  server.applyMiddleware({ app });

  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
