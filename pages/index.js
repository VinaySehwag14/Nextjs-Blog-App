import styles from "../styles/Home.module.css";
import Hero from "../components/HomePage/Hero";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import { getFeaturedPosts } from "../helper/posts-util";

const Home = (props) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}

export default Home;
