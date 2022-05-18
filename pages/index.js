import styles from "../styles/Home.module.css";
import Hero from "../components/HomePage/Hero";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "GETTING started with NEXTJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a the React framework for production- it makes building fullStack React app easy",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "GETTING started with NEXTJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a the React framework for production- it makes building fullStack React app easy",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "GETTING started with NEXTJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a the React framework for production- it makes building fullStack React app easy",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "GETTING started with NEXTJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a the React framework for production- it makes building fullStack React app easy",
    date: "2022-02-10",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
