import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLEnumType } from 'graphql';

export const GraphQLRolesType: GraphQLEnumType = new GraphQLEnumType({
  name: 'GraphQLRolesType',
  values: {
    ADMIN: {
      value: 'ADMIN',
    },
    USER: {
      value: 'USER',
    },
    GUEST: {
      value: 'GUEST',
    },
  },
});

export const GraphQLUserType: GraphQLObjectType = new GraphQLObjectType({
  fields: () => ({
    _id: {
      resolve: src => src._id,
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      resolve: src => src.name,
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      resolve: src => src.email,
      type: new GraphQLNonNull(GraphQLString),
    },
    username: {
      resolve: src => src.username,
      type: new GraphQLNonNull(GraphQLString),
    },
    role: {
      resolve: src => src.role,
      type: new GraphQLNonNull(GraphQLRolesType),
    },
  }),
  name: 'GraphQLUserType',
});
