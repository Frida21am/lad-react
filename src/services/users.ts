import { api } from "../api/api";
import { IUser } from "../types/user";

interface IUsersData {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}

export const fetchUsers = async () => {
  const { data } = await api.get<IUsersData>("/users");
  return data.users;
};

export const fetchUser = async (userId: number) => {
  const { data } = await api.get<IUser>(`/users/${userId}`);
  return data;
};
