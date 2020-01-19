import { GraphQLFieldConfig, GraphQLNonNull, GraphQLList } from 'graphql';
import { Request } from 'express';
import { GraphQLPlanType } from './types';
import { findAllPlansResolver, findOnePlanResolver } from './methods';

export const plansQuery: GraphQLFieldConfig<{}, Request> = {
  resolve: findAllPlansResolver,
  type: new GraphQLNonNull(new GraphQLList(GraphQLPlanType)),
};

export const planQuery: GraphQLFieldConfig<{}, Request> = {
  resolve: (src, { _id }) => {
    return findOnePlanResolver(_id);
  },
  type: new GraphQLNonNull(GraphQLPlanType),
};
