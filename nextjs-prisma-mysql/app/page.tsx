import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1>
          Next.js 14 CRUD and Search with prisma Mysql | TailwindCSS DaisyUI-
        </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="mb-2 w-full text-right">
          <Link href="/employee/create" className="btn btn-primary">
            Create
          </Link>
        </div>
      </div>
    </main>
  );
}
