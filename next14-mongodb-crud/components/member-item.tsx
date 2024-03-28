import { Member } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface MemberItemProps {
  member: Member;
}
const MemberItem = ({ member }: MemberItemProps) => {
  return (
    <Link
      href={`/members/${member._id}`}
      className="flex flex-col items-center"
    >
      <Image
        width={100}
        height={100}
        src={member.avatar}
        alt="member photo"
        className="border-2 border-blue-700 rounded-full"
      />
      <div className="font-bold text-center">{member.name}</div>
    </Link>
  );
};

export default MemberItem;
