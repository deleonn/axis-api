import { Schema, model } from 'mongoose';

const EventSchema: MongooseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Event = model<Event>('Event', EventSchema);
export default Event;
