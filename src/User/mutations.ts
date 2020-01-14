import { GraphQLFieldConfig, GraphQLNonNull, GraphQLString } from 'graphql';
import { createUserResolver, editUserResolver } from './methods';
import { GraphQLUserType, GraphQLRolesType } from './types';

export const createUserMutation: GraphQLFieldConfig<{}, Request, User> = {
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    phone: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    role: {
      type: new GraphQLNonNull(GraphQLRolesType),
    },
  },
  resolve: createUserResolver,
  type: new GraphQLNonNull(GraphQLUserType),
};

export const editUserMutation: GraphQLFieldConfig<{}, Request, User> = {
  args: {
    _id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    username: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    role: {
      type: GraphQLRolesType,
    },
  },
  resolve: editUserResolver,
  type: new GraphQLNonNull(GraphQLUserType),
};
