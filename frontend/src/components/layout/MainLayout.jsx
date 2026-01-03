import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#0b1220] text-gray-200">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 overflow-y-auto">
          <Outlet /> {/* This is where the Dashboard/Profile content appears */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;