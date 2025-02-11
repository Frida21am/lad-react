import { Link } from "react-router-dom";
import styles from "./Post.module.scss";
import { IPost } from "../../../types/post";

interface Props {
  post: IPost;
}

function Post({ post }: Props) {
  return (
    <div className={styles.post}>
      <div className={styles.postContent}>
        <div className={styles.postUser}>
          <div className={styles.postUserAvatar}>
            {/* <img src={user.image} alt="avatar" width={44} height={44} /> */}
            <img
              src="https://dummyjson.com/icon/emilys/128"
              alt="avatar"
              width={44}
              height={44}
            />
          </div>
          <div className={styles.postUserName}>
            <span className={styles.postUserFullname}>
              {/* {user.firstName} {user.lastName} */}
              Emily Johnson
            </span>
            <Link to="/" className={styles.postUserUsername}>
              {/* @{user.username} */}
              @emilys
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
