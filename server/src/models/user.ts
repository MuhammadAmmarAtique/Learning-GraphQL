import mongoose from "mongoose";

interface IUser {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password?: string;
}

type IUserModel = mongoose.Model<IUser>;

const schema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: true,
  },
  password: {
    type: String,
    required: false,
    select: false,
  },
});

export const User = mongoose.model<IUser, IUserModel>("User", schema);
