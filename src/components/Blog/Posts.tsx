import { usePostsContext } from "../../hooks/usePostsContext";
import styles from "./Posts.module.scss";
import Post from "./components/Post";

function Posts() {
  const postsContext = usePostsContext();

  return (
    <div className={styles.posts}>
      {postsContext.posts?.map((el) => <Post key={el.id} post={el} />)}
    </div>
  );
}

export default Posts;
