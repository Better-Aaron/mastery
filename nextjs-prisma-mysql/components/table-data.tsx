import React from 'react';

const TableData = () => {
  return (
    <table className="table table-zebra">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px-6">#</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Email</th>
          <th className="py-3 px-6">Phone number</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="">
          <td className="py-3 px-6">1</td>
          <td className="py-3 px-6">Aaron kim</td>
          <td className="py-3 px-6">k.aaron.kim@gmail.com</td>
          <td className="py-3 px-6">123456789</td>
          <td className="py-3 px-6">July 11</td>
          <td className="flex justify-center gap-1 py-3">Edit | Delete</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableData;
