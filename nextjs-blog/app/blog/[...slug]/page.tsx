import React from 'react';
import { posts } from '#site/content';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Tag from '@/components/tag';
import { MDXContent } from '@/components/mdx-components';
interface PostPageProps {
  params: {
    slug: string[];
  };
}

const getPostFromParams = async (params: PostPageProps['params']) => {
  const slug = params?.slug?.join('/');
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
};

const PagePage = async ({ params }: PostPageProps) => {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1>{post.title}</h1>
      <div className="flex gap-2 mb-2">
        {post.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      {post.description ? (
        <p className="text-xl text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </article>
  );
};

export default PagePage;
