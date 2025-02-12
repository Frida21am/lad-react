import { getPosts } from "../services/posts";
import { useQuery } from "@tanstack/react-query";

function useGetPosts() {
  const {
    data: posts,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    retry: 3,
    retryDelay: 1000,
  });
  return { posts, isLoading, isError, error };
}

export default useGetPosts;
