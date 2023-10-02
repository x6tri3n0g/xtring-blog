import fs from 'fs';
import matter from 'gray-matter';
import { PostMetadata } from "./PostMetadata";

export default function getPostMetadata(): PostMetadata[] {
  const targetPath = 'posts/';
  const files = fs.readdirSync(targetPath);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  // NOTE: Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const filecontents = fs.readFileSync(`posts/${fileName}`, 'utf8');
    const matterResult = matter(filecontents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
    }
  });

  return posts;
}