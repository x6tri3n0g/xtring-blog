import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';

const getPostContent = (slug: string) => {
  const targetPath = 'posts/';
  const file = `${targetPath}${slug}.md`;
  const content = fs.readFileSync(file, 'utf-8');
  const matterResult = matter(content);
  return matterResult;
}

interface Props {
  params: {
    slug: string;
  };
}

export default function PostPage(props: Props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <main>
      <h1>{post.data.title}</h1>
      <Markdown>{post.content}</Markdown>
    </main>
  )
}