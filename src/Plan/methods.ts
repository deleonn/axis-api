import Plan from './schema';

export const findAllPlansResolver = async (): Promise<Plan[]> => {
  const plans = await Plan.find().exec();
  return plans;
};

export const findOnePlanResolver = async (_id: string): Promise<Plan | null> => {
  const plan = await Plan.findOne({ _id }).exec();
  return plan;
};

export const createPlanResolver = async (src: {}, { name, description }: Plan): Promise<Plan | null> => {
  const plan = await Plan.create({
    name,
    description,
  });

  return plan;
};

export const editPlanResolver = async (src: {}, args: Plan): Promise<Plan | null> => {
  const plan = await Plan.findOneAndUpdate(
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

  return plan;
};
