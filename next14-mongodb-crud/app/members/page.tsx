import { getMembers } from '@/actions';
import MemberItem from '@/components/member-item';
import dbClient from '@/db/mongodb';
import { Member } from '@/types';
import { ObjectId } from 'mongodb';
import React from 'react';

interface EditMemberPageProps {
  params: {
    id: string;
  };
}

const MemberPage = async (props: EditMemberPageProps) => {
  const members = await getMembers(props.params.id);

  console.log(members);
  return (
    <div className="container mx-auto">
      <h1 className="text-xl md-5">Members Page</h1>
      <div className="">
        {members.map((member) => (
          <MemberItem member={member} key={`${new ObjectId(member._id)}`} />
        ))}
      </div>
    </div>
  );
};

export default MemberPage;
