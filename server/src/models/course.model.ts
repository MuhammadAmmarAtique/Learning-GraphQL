import mongoose from "mongoose";

interface ICourse {
  _id: mongoose.Types.ObjectId;
  title: string;
  description: string;
  instructor: string;
  price?: number;
}

type ICourseModel = mongoose.Model<ICourse>;

const schema = new mongoose.Schema<ICourse>({
  title: {
    type: String,
    required: [true, "Please enter course title"],
  },
  description: {
    type: String,
    required: [true, "Please enter course description"],
  },
  instructor: {
    type: String,
    required: [true, "Please enter instructor name"],
  },
  price: {
    type: Number,
    required: false,
  },
});

export const Course = mongoose.model<ICourse, ICourseModel>("Course", schema);
