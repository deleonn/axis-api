import { GraphQLNonNull, GraphQLString, GraphQLFieldConfig } from 'graphql';
import { GraphQLEventType } from './types';
import { createEventResolver } from './methods';

export const createEventMutation: GraphQLFieldConfig<{}, Request, Event> = {
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    date: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: createEventResolver,
  type: new GraphQLNonNull(GraphQLEventType),
};
