import fs from "fs";
import matter from "gray-matter";
import path from "path";

//* path for directory from where we have to read
const postsDirectory = path.join(process.cwd(), "posts");

function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  //* removes the file extension
  const postSlug = fileName.replace(/\.md$/, "");

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postData;
}

export function getAllPosts() {
  //* readdirSync read all content synchronously
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}

//* function for getting featured posts
export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
