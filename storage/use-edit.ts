import { create } from "zustand";

interface PostData {
  title: string;
  text: string;
  _id: string;
}

interface PostStore {
  isEditing: boolean;
  onEdit: (data: PostData) => void;
  offEdit: () => void;
  postData: PostData
}

export const usePostEdit = create<PostStore>((set) => ({
  isEditing: false,
  onEdit: (data) => set(() => ({ isEditing: true, postData: data })),
  offEdit: () => set(() => ({ isEditing: false, postData: {
    title: '',
    text: '',
    _id: ''
  } })),
  postData: {
    title: '',
    text: '',
    _id: ''
  }
}));

interface LessonData {
  age: number;
  text: string;
  src: string;
  name: string
  _id: string;
}

interface LessonStore {
  isEditing: boolean;
  onEdit: (data: LessonData) => void;
  offEdit: () => void;
  lessonData: LessonData;
}

export const useLessonEdit = create<LessonStore>((set) => ({
  isEditing: false,
  onEdit: (data) => set(() => ({ isEditing: true, lessonData: data })),
  offEdit: () => set(() => ({ isEditing: false, lessonData: {
    age: 0,
    name: '',
    src: '',
    text: '',
    _id: ''
  } })),
  lessonData: {
    age: 0,
    name: '',
    src: '',
    text: '',
    _id: ''
  }
}));

interface CommentData {
  photo: string;
  text: string;
  name: string
  _id: string;
}

interface CommentStore {
  isEditing: boolean;
  onEdit: (data: CommentData) => void;
  offEdit: () => void;
  commentData: CommentData;
}

export const useCommentEdit = create<CommentStore>((set) => ({
  isEditing: false,
  onEdit: (data) => set(() => ({ isEditing: true, commentData: data })),
  offEdit: () => set(() => ({ isEditing: false, commentData: {
    photo: '',
    name: '',
    text: '',
    _id: ''
  } })),
  commentData: {
    photo: '',
    name: '',
    text: '',
    _id: ''
  }
}));
