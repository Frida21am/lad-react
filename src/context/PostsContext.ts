import { createContext } from "react";
import { IPostsContext } from "../types/postsContext";

export const PostsContext = createContext<IPostsContext>({
  posts: [],
  isLoading: false,
  isError: false,
  error: null,
});
