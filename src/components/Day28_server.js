const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");
const cors = require("cors");

const app = express();
const port = 4000;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLInt },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    author: {
      type: UserType,
      resolve: (parent, args) => {
        return { id: 1, username: "john_doe", email: "john@example.com" };
      },
    },
  },
});

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => "Hello, GraphQL!",
    },
    getAllPosts: {
      type: new GraphQLList(PostType), // Define a list of PostType
      resolve: () => {
        return [
          { id: 1, title: "Post 1", body: "This is the body of Post 1" },
          { id: 2, title: "Post 2", body: "This is the body of Post 2" },
          { id: 3, title: "Post 2", body: "This is the body of Post 3" },
          { id: 4, title: "Post 2", body: "This is the body of Post 4" },
          { id: 5, title: "Post 2", body: "This is the body of Post 5" },
          { id: 6, title: "Post 2", body: "This is the body of Post 6" },
          { id: 7, title: "Post 2", body: "This is the body of Post 7" },
        ];
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
