import { User } from "../models";

export const verifyEmail = async (email) => {
  const exists = await User
    .where({ email })
    .fetch({ columns: [ `email` ] });

  return !!exists;
};

