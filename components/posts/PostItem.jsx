import styles from "./postsItem.module.css";
import Link from "next/link";
import Image from "next/image";

const PostItem = () => {
  const { title, image, excerpt, date, slug } = props.post;

  //* method for formatting date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={styles.post}>
      <Link>
        <a>
          <div className={styles.image}>
            <Image src={imagePath} alt={title} width="300" height={200} />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
