import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";
import styles from "./postContent.module.css";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "GETTING started with NEXTJS",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
