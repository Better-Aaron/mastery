import TableData from '@/components/table-data';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <main className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1>
          Next.js 14 CRUD and Search with prisma Mysql | TailwindCSS DaisyUI
        </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href="/employee/create" className="btn btn-primary">
            Create
          </Link>
        </div>
        <TableData />
      </div>
    </main>
  );
};

export default page;
