import { Course } from "@/models/course.model";

export const getAllCourses = async () => {
  const users = await Course.find();
  return users;
};

export const getCourseOfUser = async (user: any) => {
  const courses = await Course.find({
    instructor: user._id,
  });
  return courses;
};
