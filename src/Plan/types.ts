import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export const GraphQLPlanType: GraphQLObjectType = new GraphQLObjectType({
  fields: () => ({
    _id: {
      resolve: src => src._id,
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      resolve: src => src.name,
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      resolve: src => src.description,
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
  name: 'GraphQLPlanType',
});
