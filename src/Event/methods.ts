import Event from './schema';

export const findAllEventsResolver = async (): Promise<Event[]> => {
  const events = await Event.find().exec();
  return events;
};

export const createEventResolver = async (src: {}, { name, date, description }: Event): Promise<Event> => {
  const event = await Event.create({
    name,
    date,
    description,
  });

  return event;
};
