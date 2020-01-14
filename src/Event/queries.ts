import { GraphQLFieldConfig, GraphQLNonNull, GraphQLList } from 'graphql';
import { Request } from 'express';
import { GraphQLEventType } from './types';
import { findAllEventsResolver } from './methods';

export const eventsQuery: GraphQLFieldConfig<{}, Request> = {
  resolve: (src, args, req) => {
    return findAllEventsResolver();
  },
  type: new GraphQLNonNull(new GraphQLList(GraphQLEventType)),
};
