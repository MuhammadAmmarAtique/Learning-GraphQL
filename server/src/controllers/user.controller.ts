import { User } from "@/models/user.model";

// GraphQL Resolver Shape
// (parent, args, context, info) => result

export const getAllUsers = async () => {
  const users = await User.find();
  return users;
};
export const getUserbyId = async (id: string) => {
  const user = await User.findById(id);
  return user;
};

export const createUser = async (
  _parent: any,
  args: { name: string; email: string; password?: string }
) => {
  const user = await User.create({
    name: args.name,
    email: args.email,
    password: args.password,
  });
  return user;
};
