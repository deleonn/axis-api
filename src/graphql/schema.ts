import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { userQuery, usersQuery, createUserMutation, editUserMutation } from '../User';
import { plansQuery } from '../Plan';

const query = new GraphQLObjectType({
  fields: () => ({
    userQuery,
    usersQuery,
    plansQuery,
  }),
  name: 'query',
});

const mutation: GraphQLObjectType<any, any, any> = new GraphQLObjectType({
  fields: () => ({
    createUserMutation,
    editUserMutation,
  }),
  name: 'mutation',
});

export const schema = new GraphQLSchema({
  query,
  mutation,
});
