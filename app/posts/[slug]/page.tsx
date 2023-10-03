import fs from 'fs';
import Markdown from 'react-markdown';
import matter from 'gray-matter';

import getPostMetadata from '@/components/getPostMetadata';

const getPostContent = (slug: string) => {
  const targetPath = 'posts/';
  const file = `${targetPath}${slug}.md`;
  const content = fs.readFileSync(file, 'utf-8');
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({ slug: post.slug }));
};

interface Props {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: Props) {
  const { slug } = params;
  const post = getPostContent(slug);
  return (
    <main>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 font-bold">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>
      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
