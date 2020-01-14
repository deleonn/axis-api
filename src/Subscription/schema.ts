import { Schema, model } from 'mongoose';

const SubscriptionSchema: MongooseSchema = new Schema(
  {
    plan_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Plan',
    },
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Subscription = model<Subscription>('Subscription', SubscriptionSchema);
export default Subscription;
