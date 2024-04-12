'use server';

import Comments from "@/models/Comment";
import connect from "@/lib/db";
import { ObjectId } from "mongoose";
import { revalidatePath } from "next/cache";

interface CommentData {
  _id: ObjectId | string;
  photo: string;
  name: string;
  text: string;
  createdAt: Date | string;
}

export const getAllComments = async (toPlain?: boolean): Promise<CommentData[]> => {
  try {
    await connect();

    const comments = await Comments.find().sort({ createdAt: -1 }).orFail();

    if (toPlain) {
      return comments.map((comment) => JSON.parse(JSON.stringify(comment)));
    }

    return comments;
  } catch(e) {
      throw new Error('Не получилось загрузить комментарии :(');
  }
};

export const postComment = async ({
  photo, 
  name,
  text,
}: Partial<CommentData>) => {
  try {
    await connect();

    const comment = await Comments.create({
      photo,
      name,
      text
    });

    revalidatePath('/dashboard/comments');

    return JSON.parse(JSON.stringify(comment));
  } catch(e) {
    throw new Error('Не удалось создать комментарий');
  }
};

export const patchComment = async ({
  photo,
  name,
  text, 
  _id
}: Partial<CommentData>) => {
 try {
  await connect();

  const comment = await Comments.findByIdAndUpdate(_id, {
    photo,
    name,
    text
  }, { new: true }).orFail();

  revalidatePath('/dashboard/comments');

  return JSON.parse(JSON.stringify(comment));

 } catch(e) {
  throw new Error('Не удалось редактировать комментарий');
 }
};

export const deleteComment = async (_id: CommentData['_id']) => {
  try {
    await connect();

    await Comments.findByIdAndDelete(_id).orFail();

    revalidatePath('/dashboard/comments');
  } catch(e) {
    throw new Error('Не удалось удалить комментарий');
  }
};

