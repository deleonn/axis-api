import { GraphQLNonNull, GraphQLString, GraphQLFieldConfig } from 'graphql';
import { GraphQLPlanType } from './types';
import { createPlanResolver, editPlanResolver } from './methods';

export const createPlanMutation: GraphQLFieldConfig<{}, Request, Plan> = {
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: createPlanResolver,
  type: new GraphQLNonNull(GraphQLPlanType),
};

export const editPlanMutation: GraphQLFieldConfig<{}, Request, Plan> = {
  args: {
    _id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: editPlanResolver,
  type: new GraphQLNonNull(GraphQLPlanType),
};
