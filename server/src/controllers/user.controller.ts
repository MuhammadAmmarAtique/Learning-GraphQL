import { User } from "@/models/user.model";

// GraphQL Resolver Shape
// (parent, args, context, info) => result

export const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

export const getUserbyId = async (parent: any, argument: { id: string }) => {
  const user = await User.findById(argument.id);
  return user;
};
