import { Schema, model } from 'mongoose';
import { securePassword, validEmail } from '../util/validators';
import { validations } from '../util/locales';

const UserSchema: MongooseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) => validEmail(value),
        msg: validations.User.error_invalidEmail,
      },
      unique: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) => securePassword(value),
        msg: validations.User.error_passwordNotSecure,
      },
    },
    role: {
      type: String,
      enum: ['ADMIN', 'USER', 'GUEST'],
      default: 'GUEST',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const User = model<User>('User', UserSchema);
export default User;
