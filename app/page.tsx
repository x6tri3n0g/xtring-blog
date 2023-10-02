import Link from 'next/link';
import getPostMetadata from '@/components/getPostMetadata';
import PostPreview from '@/components/PostPreview';

export default function HomePage() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, index) => (
    <PostPreview key={`${post.title}-${index}`} post={post}/>
  ));

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {postPreviews}
    </main>
  )
}
