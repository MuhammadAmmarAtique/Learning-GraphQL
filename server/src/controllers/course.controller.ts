import { Course } from "@/models/course.model";

export const getAllCourses = async () => {
  const users = await Course.find();
  return users;
};
