import Comments from "@/models/Comment";
import connect from "./db";

interface CommentData {
  _id?: string;
  photo?: string;
  name?: string;
  text?: string
}

export const getAllComments = async () => {
  try {
    await connect();

    const comments = await Comments.find().sort({ createdAt: -1 });

    return comments;
  } catch(e) {
      throw new Error('Не получилось загрузить комментарии :(');
  }
};

export const postComment = async ({
  photo, 
  name,
  text,
}: CommentData) => {
  try {
    await connect();

    const lesson = await Comments.create({
      photo,
      name,
      text
    });

    return lesson;
  } catch(e) {
    throw new Error('Не удалось создать комментарий');
  }
};

export const patchComment = async ({
  photo,
  name,
  text, 
  _id
}: CommentData) => {
 try {
  await connect();

  const lesson = await Comments.findByIdAndUpdate(_id, {
    photo,
    name,
    text
  }, { new: true }).orFail();

  return lesson;

 } catch(e) {
  throw new Error('Не удалось редактировать комментарий');
 }
};

export const deleteLesson = async ({
  _id
}: CommentData) => {
  try {
    await connect();

    await Comments.findByIdAndDelete(_id).orFail();
  } catch(e) {
    throw new Error('Не удалось удалить комментарий');
  }
};
