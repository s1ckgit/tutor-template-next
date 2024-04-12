'use server';

import BlogPost from "@/models/Blog-post";
import connect from "@/lib/db";
import { revalidatePath } from "next/cache";
import { ObjectId } from "mongoose";

export interface PostData {
  _id: ObjectId | string;
  title: string;
  text: string;
  createdAt: Date | string;
}

export const getAllPosts = async (toPlain?: boolean) => {
  try {
    await connect();

    const posts = await BlogPost.find().sort({ createdAt: -1 });

    if (toPlain) {
      return JSON.parse(JSON.stringify(posts)) as PostData[];
    }

    return posts as PostData[];
  } catch(e) {
      throw new Error('Не получилось загрузить посты :(');
  }
};

export const makePost = async ({
  title,
  text
}: Partial<PostData>) => {
  try {
    await connect();

    const post = await BlogPost.create({
      title,
      text
    });

    revalidatePath('/dashboard/posts');

    return JSON.parse(JSON.stringify(post));
  } catch(e) {
    throw new Error('Не удалось создать пост');
  }
};

export const patchPost = async ({
  _id,
  text,
  title
}: Partial<PostData>) => {
 try {
  await connect();

  const post = await BlogPost.findByIdAndUpdate(_id, {
    title,
    text
  }, { new: true }).orFail();

  revalidatePath('/dashboard/posts');

  return JSON.parse(JSON.stringify(post));

 } catch(e) {
  throw new Error('Не удалось редактировать пост');
 }
};

export const deletePost = async (_id: PostData['_id']) => {
  try {
    await connect();

    await BlogPost.findByIdAndDelete(_id).orFail();
    revalidatePath('/dashboard/posts');
  } catch(e) {
    throw new Error(`${e}`);
  }
};
