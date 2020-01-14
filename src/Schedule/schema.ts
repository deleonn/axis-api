import { Schema, model } from 'mongoose';

const ScheduleSchema: MongooseSchema = new Schema(
  {
    plan_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Plan',
    },
    periodicy: {
      type: Array,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Schedule = model<Schedule>('Schedule', ScheduleSchema);
export default Schedule;
