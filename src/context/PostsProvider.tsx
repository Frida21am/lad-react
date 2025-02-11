import { PostsContext } from "./PostsContext";
import useGetPosts from "../hooks/useGetPosts";

type PostsProviderProps = {
  children: React.ReactNode;
};

const PostsProvider = ({ children }: PostsProviderProps) => {
  const { posts, isLoading, isError, error } = useGetPosts();

  const value = {
    posts,
    isLoading,
    isError,
    error,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};

export default PostsProvider;
