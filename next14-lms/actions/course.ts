"use server";
import { db } from "@/lib/db";

export const getCourseByCourseId = async (courseId: string) => {
  try {
    const course = await db.course.findUnique({
      where: {
        id: courseId,
      },
    });
    return course;
  } catch {
    return null;
  }
};
