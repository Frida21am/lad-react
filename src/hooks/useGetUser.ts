import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../services/users";

function useGetUser(userId: number) {
  const {
    data: user,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => fetchUser(userId),
    retry: 3,
    retryDelay: 1000,
  });
  return { user, isLoading, isError, error };
}

export default useGetUser;
