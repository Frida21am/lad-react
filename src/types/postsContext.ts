import { IPost } from "./post";

export interface IPostsContext {
  posts: IPost[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}
