import Image from "next/image";
import styles from "./postHeader.module.css";

const PostHeader = (props) => {
  const { title, image } = props;
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export default PostHeader;
