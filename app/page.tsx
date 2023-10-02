import fs from 'fs';
import Link from 'next/link';
import matter from 'gray-matter';
import { PostMetadata } from '@/components/postMetadata';

const getPostMetadata = (): PostMetadata[] => {
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

export default function HomePage() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, index) => (
    <div key={`${post.title}-${index}`}>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>
    </div>
  ));

  return (
    <main>
      {postPreviews}
    </main>
  )
}
