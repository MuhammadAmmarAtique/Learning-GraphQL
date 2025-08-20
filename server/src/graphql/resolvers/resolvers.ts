import { User } from "@/models/user";
import { getAllUsers } from "@/controllers/user";

export const graphQLResolver = {
  Query: {
    hello: () => "Hello world 1",
    hello2: () => "Hello world 2",
    users: getAllUsers,
  },
};
