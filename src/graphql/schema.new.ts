import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLFieldConfig,
  GraphQLNonNull,
  GraphQLString,
  GraphQLSchemaConfig,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import { Request } from 'express';

const users = [
  {
    id: 1,
    name: 'Eduardo',
    email: 'edgravill@gmail.com',
    friends: [2, 3],
  },
  {
    id: 2,
    name: 'Joel',
    email: 'joel@joel.com',
    friends: [1, 3],
  },
  {
    id: 3,
    name: 'Fer',
    email: 'fer@fer.com',
    friends: [2, 3],
  },
];

const GraphQLUserType: GraphQLObjectType = new GraphQLObjectType({
  fields: () => ({
    name: {
      resolve: src => src.name,
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      resolve: src => src.email,
      type: new GraphQLNonNull(GraphQLString),
    },
    friends: {
      resolve: src => {
        return users.filter(user => src.friends.includes(user.id)) as User[];
      },
      type: new GraphQLNonNull(new GraphQLList(GraphQLUserType)),
    },
  }),
  name: 'GraphQLUserType',
});

interface User {
  id: number;
  name: string;
  email: string;
  friends: number[];
}

const userQuery: GraphQLFieldConfig<{}, Request> = {
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (src, { email }, req): User => {
    return users.find(user => user.email === email) as User;
  },
  type: new GraphQLNonNull(GraphQLUserType),
};

const GraphQLInfoType = new GraphQLObjectType({
  fields: () =>
    ({
      age: {
        resolve: src => {
          return src.age;
        },
        type: new GraphQLNonNull(GraphQLInt),
      },
      ageByTwice: {
        resolve: src => {
          return src.age * 2;
        },
        type: new GraphQLNonNull(GraphQLInt),
      },
    } as { [name: string]: GraphQLFieldConfig<Info, Request> }),
  name: 'GraphQLInfoType',
});

interface Info {
  name: string;
  lastName: string;
  age: number;
}

const infoQuery: GraphQLFieldConfig<{}, Request> = {
  resolve: (): Info => {
    return {
      age: 24,
      lastName: 'De León Medina',
      name: 'Joel Benjamín',
    };
  },
  type: new GraphQLNonNull(GraphQLInfoType),
};

interface HelloQueryArguments {
  name: string;
}

const helloQuery: GraphQLFieldConfig<{}, Request, HelloQueryArguments> = {
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (src, { name }, req): string => {
    return `World, ${name}`;
  },
  type: new GraphQLNonNull(GraphQLString),
};

const query = new GraphQLObjectType({
  fields: () => ({
    hello: helloQuery,
    info: infoQuery,
    user: userQuery,
  }),
  name: 'query',
});

export const schema = new GraphQLSchema({
  query,
} as GraphQLSchemaConfig);
