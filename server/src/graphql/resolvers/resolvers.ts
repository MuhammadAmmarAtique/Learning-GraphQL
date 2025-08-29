import { getAllUsers, getUserbyId } from "@/controllers/user";

export const graphQLResolver = {
  Query: {
    hello: () => "Hello world 1",
    hello2: () => "Hello world 2",
    users: getAllUsers,
    user: getUserbyId,
  },
};
