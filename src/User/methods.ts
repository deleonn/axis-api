import User from './schema';
import { hashPassword } from '../util/helpers';

export const findAllUsersResolver = async (): Promise<User[]> => {
  const users = await User.find().exec();
  return users;
};

export const findOneUserResolver = async (email: string): Promise<User | null> => {
  const user = await User.findOne({ email }).exec();
  return user;
};

export const createUserResolver = async (
  src: {},
  { email, name, username, phone, password, role }: User,
): Promise<User> => {
  const hashedPassword = await hashPassword(password!);

  const user = await User.create({
    email,
    name,
    username,
    phone,
    password: hashedPassword,
    role,
  });

  return user;
};

export const editUserResolver = async (src: {}, args: User): Promise<User | null> => {
  if (args.password !== undefined) {
    args.password = await hashPassword(args.password!);
  }

  const user = await User.findOneAndUpdate(
    { _id: args._id },
    {
      $set: args,
      new: true,
      upsert: true,
    },
    {
      upsert: true,
    },
  ).exec();

  return user;
};
