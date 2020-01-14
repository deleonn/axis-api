type MongooseDocument = import('mongoose').Document;
type MongooseModel<D> = import('mongoose').Model<D>;
type MongooseSchemaTypeOpts<T> = import('mongoose').SchemaTypeOpts<T>;
type MongooseSchema = import('mongoose').Schema;
type MongooseSchemaType = import('mongoose').SchemaType;

interface Locales {
  User: {
    error_passwordNotSecure: string;
    error_invalidEmail: string;
  };
}

interface User extends MongooseDocument {
  _id: string;
  email: string;
  name: string;
  username: string;
  phone: string;
  password?: string;
  role: string;
}

interface Event extends MongooseDocument {
  _id: string;
  name: string;
  date: string;
  description: string;
}

interface Plan extends MongooseDocument {
  _id: string;
  name: string;
  description: string;
}

interface Subscription extends MongooseDocument {
  _id: string;
  plan_id: string;
  user_id: string;
  date: string;
}

interface Schedule extends MongooseDocument {
  _id: string;
  plan_id: string;
  periodicy: number[];
  from: string;
  to: string;
}

interface Attendance extends MongooseDocument {
  _id: string;
  user_id: string;
  created_by: string;
  date: string;
}

interface Role {
  admin: {
    can: string[];
  };
  user: {
    can: string[];
  };
}
