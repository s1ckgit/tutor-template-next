'use server';

import LessonCard from "@/models/Lesson-card";
import connect from "@/lib/db";
import { ObjectId } from "mongoose";
import { revalidatePath } from "next/cache";

interface LessonData {
  _id: ObjectId | string;
  src: string;
  name: string;
  age: number;
  text: string;
  createdAt: Date | string;
}

export const getAllLessons = async (toPlain?: boolean): Promise<LessonData[]> => {
  try {
    await connect();

    const lessons = await LessonCard.find().sort({ createdAt: -1 });

    if (toPlain) {
      return lessons.map((lesson) => JSON.parse(JSON.stringify(lesson)));
    }

    return lessons;
  } catch(e) {
      throw new Error('Не получилось загрузить уроки :(');
  }
};

export const postLesson = async ({
  src, 
  name, 
  age,
  text,
}: Partial<LessonData>) => {
  try {
    await connect();

    const lesson = await LessonCard.create({
      src,
      name,
      age,
      text
    });

    revalidatePath('/dashboard/lessons');

    return JSON.parse(JSON.stringify(lesson));
  } catch(e) {
    throw new Error('Не удалось создать урок');
  }
};

export const patchLesson = async ({
  src, 
  name, 
  age, 
  text, 
  _id
}: Partial<LessonData>) => {
 try {
  await connect();

  const lesson = await LessonCard.findByIdAndUpdate(_id, {
    src,
    name,
    age,
    text
  }, { new: true }).orFail();

  revalidatePath('/dashboard/lessons');

  return JSON.parse(JSON.stringify(lesson));

 } catch(e) {
  throw new Error('Не удалось редактировать урок');
 }
};

export const deleteLesson = async (_id: LessonData['_id']) => {
  try {
    await connect();

    await LessonCard.findByIdAndDelete(_id).orFail();

    revalidatePath('/dashboard/lessons');
  } catch(e) {
    throw new Error('Не удалось удалить урок');
  }
};

