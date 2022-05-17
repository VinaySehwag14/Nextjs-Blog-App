import styles from "./postGrid.module.css";
import PostItem from "./PostItem";

const PostGrid = (props) => {
  const { posts } = props;

  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={2} />
      ))}
    </ul>
  );
};

export default PostGrid;
