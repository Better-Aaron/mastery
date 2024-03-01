import { addPost, deletePost } from '@/lib/actions';

const ServerActionTest = () => {
  // const actionInComponent = async (data) => {
  //   'use server';
  //   const typeValue = data.get('type');

  //   console.log('it Works!', typeValue);
  // };

  return (
    <div>
      <form action={addPost}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="desc" placeholder="desc" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="text" name="userId" placeholder="userId" />
        <button>Create</button>
      </form>

      <form action={deletePost}>
        <input type="text" name="id" placeholder="postId" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTest;
