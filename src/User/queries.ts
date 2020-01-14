import { GraphQLFieldConfig, GraphQLNonNull, GraphQLString, GraphQLList } from 'graphql';
import { Request } from 'express';
import { findOneUserResolver, findAllUsersResolver } from './methods';
import { GraphQLUserType } from './types';

export const usersQuery: GraphQLFieldConfig<{}, Request> = {
  resolve: (src, args, req) => {
    return findAllUsersResolver();
  },
  type: new GraphQLNonNull(new GraphQLList(GraphQLUserType)),
};

export const userQuery: GraphQLFieldConfig<{}, Request> = {
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (src, { email }, req) => {
    return findOneUserResolver(email);
  },
  type: new GraphQLNonNull(GraphQLUserType),
};
