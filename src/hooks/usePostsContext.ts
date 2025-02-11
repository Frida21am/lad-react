import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import { IPostsContext } from "../types/postsContext";

export const usePostsContext = () => {
  return useContext<IPostsContext>(PostsContext);
};
