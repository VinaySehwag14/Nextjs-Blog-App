import AllPosts from "../../components/posts/AllPosts";

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

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
