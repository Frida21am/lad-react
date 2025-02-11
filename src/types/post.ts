export interface IPost {
  id: number;
  body: string;
  tags: Tag[];
  reactions: Reaction;
  userId: number;
}

type Tag = string;

type Reaction = {
  likes: number;
};
