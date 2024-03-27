import { deleteMember, getMemberById } from '@/actions';
import { convertDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface MemberPageProps {
  params: {
    id: string;
  };
}
const MemberDetailPage = async ({ params: { id } }: MemberPageProps) => {
  const member = await getMemberById(id);

  if (!member) {
    return notFound();
  }
  return (
    <div className="container mx-auto bg-blue-700">
      <div className="p-2 flex items-center">
        <Image
          width={200}
          height={200}
          src={member.avatar}
          alt="member photo"
          className="border-4 rounded-full"
        />

        <div className="flex-col text-white ml-5">
          <div className="text-2xl font-bold">{member.name}</div>
          <div>Member Since: {member.createdAt}</div>
        </div>
      </div>

      <div className="flex gap-2 justify-end p-5">
        <Link
          href={`/members/${member._id}/edit`}
          className="bg-yellow-300 p-3 rounded"
        >
          Edit
        </Link>

        <form action={deleteMember.bind(null, member._id)}>
          <button className="bg-red-500 p-3 rounded">Delete</button>
        </form>
      </div>
    </div>
  );
};

export default MemberDetailPage;
