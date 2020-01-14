import { Schema, model } from 'mongoose';

const AttendanceSchema: MongooseSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    created_by: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Attendance = model<Attendance>('Attendance', AttendanceSchema);
export default Attendance;
