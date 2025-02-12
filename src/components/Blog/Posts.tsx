import useGetPosts from "../../hooks/useGetPosts";
import styles from "./Posts.module.scss";
import Post from "./components/Post";

function Posts() {
  const data = useGetPosts();

  return (
    <div className={styles.posts}>
      {data.posts?.map((el) => <Post key={el.id} post={el} />)}
    </div>
  );
}

export default Posts;
