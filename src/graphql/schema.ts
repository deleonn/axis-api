import { GraphQLSchema, GraphQLObjectType, GraphQLFieldConfig } from 'graphql';
import { userQuery, usersQuery, createUserMutation, editUserMutation } from '../User';
import { plansQuery, planQuery, createPlanMutation, editPlanMutation } from '../Plan';

const q: { [name: string]: GraphQLFieldConfig<{}, Request, any> } = {
  userQuery,
  usersQuery,
  planQuery,
  plansQuery,
};

const m: { [name: string]: GraphQLFieldConfig<{}, Request, any> } = {
  createUserMutation,
  editUserMutation,
  createPlanMutation,
  editPlanMutation,
};

const query = new GraphQLObjectType({
  fields: () => ({
    ...q,
  }),
  name: 'query',
});

const mutation: GraphQLObjectType = new GraphQLObjectType({
  fields: () => ({
    ...m,
  }),
  name: 'mutation',
});

export const schema = new GraphQLSchema({
  query,
  mutation,
});
