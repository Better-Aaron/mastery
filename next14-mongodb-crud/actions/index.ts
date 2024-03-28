'use server';

import dbClient from '@/db/mongodb';
import { Member } from '@/types';
import { ObjectId } from 'mongodb';
import { redirect } from 'next/navigation';

//* Create Memeber
export const createMemeber = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const avatar = formData.get('avatar') as string;

  const member = await dbClient
    .db('next-members')
    .collection('members')
    .insertOne({ name, avatar, createdAt: new Date().toISOString() });

  console.log(member);

  redirect('/members');
};

//* edit member
export const editMemberAction = async (member: Member) => {
  await dbClient
    .db('next-members')
    .collection<Member>('members')
    .findOneAndUpdate(
      { _id: new ObjectId(member._id) },
      {
        $set: {
          name: member.name,
          avatar: member.avatar,
        },
      }
    );

  redirect(`/members/${member._id}`);
};

//* Get member by id
export const getMemberById = async (id: string) => {
  console.log(id);
  try {
    const member = await dbClient
      .db('next-members')
      .collection<Member>('members')
      .findOne({ _id: new ObjectId(id) });
    return member;
  } catch (error) {
    console.log(error);
    return null;
  }
};

//* Get All Members
export const getMembers = async () => {
  const members = await dbClient
    .db('next-members')
    .collection<Member>('members')
    .find()
    .toArray();
  return members;
};

//* delete Member By id
export const deleteMember = async (id: ObjectId) => {
  await dbClient
    .db('next-members')
    .collection<Member>('members')
    .deleteOne({ _id: new ObjectId(id) });
  redirect('/members');
};
