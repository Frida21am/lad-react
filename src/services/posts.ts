import { api } from "../api/api";
import { IPost } from "../types/post";

interface IPostsData {
  posts: IPost[];
  total: number;
  skip: number;
  limit: number;
}

export const fetchPosts = async () => {
  const { data } = await api.get<IPostsData>("/posts");
  return data.posts;
};

export const fetchPost = async (id: number) => {
  const { data } = await api.get<IPost>(`/posts/${id}`);
  return data;
};
