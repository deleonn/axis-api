import { Schema, model } from 'mongoose';

const PlanSchema: MongooseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Plan = model<Plan>('Plan', PlanSchema);
export default Plan;
