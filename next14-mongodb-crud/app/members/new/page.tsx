import { createMemeber } from '@/actions';

const MemeberCreatePage = () => {
  return (
    <form action={createMemeber}>
      <div className="flex flex-col gap-3 max-w-xl mx-auto bg-slate-700 p-5 rounded">
        <h3 className="font-bold m-3">Create new Memeber</h3>

        <div className="flex gap-4 w-full">
          <label htmlFor="name" className="w-10">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full text-gray-800 px-2 py-1 rounded"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="avatar" className="w-10">
            Avatar
          </label>
          <input
            type="text"
            name="avatar"
            id="avatar"
            className="w-full text-gray-800 px-2 py-1 rounded"
          />
        </div>
        <button type="submit" className="rounded bg-green-500 p-2 w-full">
          Create
        </button>
      </div>
    </form>
  );
};

export default MemeberCreatePage;
