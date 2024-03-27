import { getMemberById } from '@/actions';
import MemberEditForm from '@/components/member-edit-form';
import { notFound } from 'next/navigation';

interface MemberEditPageProps {
  params: {
    id: string;
  };
}

const MemberEditPage = async ({ params: { id } }: MemberEditPageProps) => {
  const member = await getMemberById(id);
  if (!member) {
    return notFound();
  }
  return (
    <div>
      <MemberEditForm member={member} />
    </div>
  );
};

export default MemberEditPage;
