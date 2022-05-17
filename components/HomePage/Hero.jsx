import styles from "./hero.module.css";
import Image from "next/image";

const hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/vinay.JPG"
          alt="An image of myself"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Vinay</h1>
      <p>
        I blog about Web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
};

export default hero;
