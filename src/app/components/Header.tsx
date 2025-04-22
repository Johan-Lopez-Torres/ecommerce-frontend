
"use client";
import React from 'react';

const DashboardHeader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-purple-600 p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Morning, Heather</h1>
          <p className="text-sm">Have a nice day!</p>
        </div>
        <div className="flex space-x-4">
          <div className="text-right">
            <p className="text-sm">Sales</p>
            <p className="text-xl font-bold text-green-400">20.5%</p>
          </div>
          <div className="text-right">
            <p className="text-sm">Tasks</p>
            <p className="text-xl font-bold text-yellow-400">5.7%</p>
          </div>
          <div className="text-right">
            <p className="text-sm">Sales</p>
            <p className="text-xl font-bold text-red-400">-3.24%</p>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <button className="bg-gray-700 px-4 py-2 rounded">My Profile</button>
        <div className="flex space-x-4">
          <button className="px-4 py-2">Account</button>
          <button className="px-4 py-2">Board</button>
          <button className="px-4 py-2">Listing</button>
        </div>
      </nav>

      {/* Projects Section */}
      <section className="p-4">
        <h2 className="text-xl font-bold">Projects</h2>
        <p className="text-sm text-gray-400">Manage pending orders and track invoices.</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 flex justify-between items-center">
        <div>
          <p className="text-sm">© 2024 Purpose. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <button>Support</button>
          <button>Docs</button>
          <button>What’s new</button>
        </div>
      </footer>
    </div>
  );
};

export default DashboardHeader;
