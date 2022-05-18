import styles from "./postGrid.module.css";
import PostItem from "./PostItem";

const PostGrid = (props) => {
  const { posts } = props;

  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </ul>
  );
};

export default PostGrid;
