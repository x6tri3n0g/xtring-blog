import Link from 'next/link';
import { PostMetadata } from './PostMetadata';

interface Props {
  post: PostMetadata;
}

export default function PostPreview({ post }: Props) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="border border-slate-300 p-4 rounded-md shadow-sm bg-white"
    >
      <p className="text-sm text-slate-400">{post.date}</p>
      <h2 className="text-xl font-bold text-violet-600 mb-2 hover:underline">
        {post.title}
      </h2>
      <p className="text-slate-700">{post.subtitle}</p>
    </Link>
  );
}
