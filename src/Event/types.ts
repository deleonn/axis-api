import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLScalarType } from 'graphql';

const GraphQLScalarDate = new GraphQLScalarType({
  name: 'Date',
  serialize(value) {
    return new Date(value).toLocaleString() || null;
  },
});

export const GraphQLEventType: GraphQLObjectType = new GraphQLObjectType({
  fields: () => ({
    _id: {
      resolve: src => src._id,
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      resolve: src => src.name,
      type: new GraphQLNonNull(GraphQLString),
    },
    date: {
      resolve: src => src.date,
      type: new GraphQLNonNull(GraphQLScalarDate),
    },
    description: {
      resolve: src => src.description,
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
  name: 'GraphQLEventType',
});
