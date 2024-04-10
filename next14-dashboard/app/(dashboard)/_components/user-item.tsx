'use client';

export const UserItem = () => {
  return (
    <div className="flex border rounded-lg p-4 items-center justify-between gap-2 ">
      <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
        <p>MS</p>
      </div>
      <div className="grow max-w-[calc(100%-2.7rem)]">
        <p className="text-base font-bold">Aaron kim</p>
        <p className="text-xs text-neutral-500 overflow-hidden text-ellipsis">
          k.aaron.kimaslkfjasdflkj@gmail.com
        </p>
      </div>
    </div>
  );
};
