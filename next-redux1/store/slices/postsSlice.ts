import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Post = {
  id: number;
  title: string;
  description: string;
};

const initialState: Post[] = [
  { id: 1, title: 'Post 1', description: 'Description 1' },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, action: PayloadAction<Post[]>) => {
      state.push(...action.payload);
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const { id, title, description } = action.payload;
      const postIndex = state.findIndex((post: Post) => post.id === id);
      if (postIndex !== -1) {
        state[postIndex].title = title;
        state[postIndex].description = description;
      }
    },
    addPost: (state, action: PayloadAction<Post>) => {
      const { id, title, description } = action.payload;
      state.push({ id, title, description });
    },
    deletePost: (state, action: PayloadAction<any>) => {
      const postId = action.payload;
      return state.filter((post: any) => post.id !== postId);
    },
  },
});

export const { addPost, addPosts, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
