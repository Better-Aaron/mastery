import React from 'react';
import { Sidebar } from './_components/sidebar';
import { Header } from './_components/header';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start justify-between">
      <Sidebar />
      <main className="w-full h-full">
        <Header />
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
