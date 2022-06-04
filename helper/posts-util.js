import fs from "fs";
import matter from "gray-matter";
import path from "path";

//* path for directory from where we have to read
const postsDirectory = path.join(process.cwd(), "posts");

export function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  //* removes the file extension
  const postSlug = postIdentifier.replace(/\.md$/, "");

  const filePath = path.join(postsDirectory, `${postSlug}.md`); //*to make to read slugs data
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

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
