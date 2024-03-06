'use client';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { addPost, deletePost } from '@/store/slices/postsSlice';
import { useState } from 'react';

import styles from './Posts.module.css';
const Posts = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.posts);

  const handleRemovePost = async (postId: string) => {
    dispatch(deletePost(postId));
  };

  const handleAddPost = (e: any) => {
    if (!title && !description) return;

    const newPost = {
      id: Date.now(),
      title,
      description,
    };

    dispatch(addPost(newPost));

    setTitle('');
    setDescription('');
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} action={handleAddPost}>
        <input
          type="text"
          className={styles.input}
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="description"
          value={description}
          className={styles.textarea}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Add New Post
        </button>
      </form>

      <h1 className={styles.heading}>Posts</h1>
      {posts ? (
        posts.map((post: any) => (
          <div key={post.id} className={styles.post}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.description}>{post.description}</p>
            <button
              className={styles.deleteButton}
              onClick={() => handleRemovePost(post.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default Posts;
