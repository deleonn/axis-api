import { GraphQLFieldConfig, GraphQLNonNull, GraphQLList } from 'graphql';
import { Request } from 'express';
import { GraphQLPlanType } from './types';
import { findAllPlansResolver } from './methods';

export const plansQuery: GraphQLFieldConfig<{}, Request> = {
  resolve: (src, args, req) => {
    return findAllPlansResolver();
  },
  type: new GraphQLNonNull(new GraphQLList(GraphQLPlanType)),
};
