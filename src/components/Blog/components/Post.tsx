import { Link } from "react-router-dom";
import styles from "./Post.module.scss";
import { IPost } from "../../../types/post";
import useGetUser from "../../../hooks/useGetUser";

interface Props {
  post: IPost;
}

function Post({ post }: Props) {
  const userData = useGetUser(post.userId);

  return (
    <div className={styles.post}>
      <div className={styles.postContent}>
        <div className={styles.postUser}>
          <div className={styles.postUserAvatar}>
            <img
              src={userData?.user?.image}
              alt="avatar"
              width={44}
              height={44}
            />
          </div>
          <div className={styles.postUserName}>
            <span className={styles.postUserFullname}>
              {userData?.user?.firstName} {userData?.user?.lastName}
            </span>
            <Link to="/" className={styles.postUserUsername}>
              @{userData?.user?.username}
            </Link>
          </div>
        </div>
        <div className={styles.postBody}>
          <p>{post.body}</p>
        </div>
        <div className={styles.postFooter}>
          <div className={styles.postTags}>
            {post.tags.map((el, index) => (
              <span key={index}>{el}</span>
            ))}
          </div>
          <div className={styles.postLikes}>
            <div className={styles.postLikesImage}>
              <img src="/likes.png" alt="likes" width={24} height={24} />
            </div>
            <div className={styles.postLikesNumber}>
              <span>{post.reactions.likes}</span>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/post/` + post.id} className={styles.linkToDetail}>
        Детальнее
      </Link>
    </div>
  );
}

export default Post;
