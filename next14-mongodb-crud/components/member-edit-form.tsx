'use client';
import { Member } from '@/types';
import React, { ChangeEvent, useState } from 'react';

interface MemberEditFormProps {
  member: Member;
}

const MemberEditForm = (props: MemberEditFormProps) => {
  const [member, setMember] = useState(props.member);

  //* handle change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <div className="flex flex-col gap-3 max-w-xl mx-auto bg-slate-300 p-5 rounded">
        <h3 className="font-bold">Edit Member</h3>

        <div className="flex gap-5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={member.name}
            onChange={(e) => handleChange(e)}
            className="border rounded p-2 w-full"
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="avatar">Avatar</label>
          <input
            type="text"
            name="avatar"
            id="avatar"
            defaultValue={member.avatar}
            onChange={(e) => handleChange(e)}
            className="border rounded p-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-green-500 p-2 text-white font-bold"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default MemberEditForm;
