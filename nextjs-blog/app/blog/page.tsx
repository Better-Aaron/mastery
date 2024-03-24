import { posts } from '#site/content';
import PostItem from '@/components/post-item';
import { sortPost } from '@/lib/utils';

const BlogPage = async () => {
  const sortedPost = sortPost(posts.filter((post) => post.published));
  const displayPosts = sortedPost;

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            My ramblings on all things web dev.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr />

          {displayPosts?.length > 0 ? (
            <ul className="flex flex-col">
              {displayPosts.map((post, index) => {
                const { slug, title, date, description, tags } = post;
                return (
                  <li key={index}>
                    <PostItem
                      slug={slug}
                      date={date}
                      title={title}
                      description={description}
                      tags={tags}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
