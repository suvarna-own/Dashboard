import React, { useState } from 'react';
import { MainContainer } from './MainContainer';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Container */}
      <aside 
        className={`bg-slate-900 text-white p-5 pt-8 transition-all duration-300 relative ${
          isOpen ? 'w-50' : 'w-20'
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-3 top-9 bg-amber-500 text-slate-900 p-1 rounded-full text-xs font-bold"
        >
          {isOpen ? '◀' : '▶'}
        </button>

        {/* Logo / Brand Area */}
        <div className="flex gap-x-4 items-center">
          <span className="text-2xl cursor-pointer block float-left mr-2">🚀</span>
          <h2 className={`origin-left font-medium text-xl duration-200 ${!isOpen && 'scale-0'}`}>
           Dashboard
          </h2>
        </div>

        {/* Navigation Links */}
        <nav className="mt-10">
          <ul className="space-y-2">
            <li className="flex items-center gap-x-4 p-2 hover:bg-slate-800 rounded-md cursor-pointer">
              <span className="text-xl">📊</span>
              <span className={`duration-200 ${!isOpen && 'hidden'}`}>Dashboard</span>
            </li>
            <li className="flex items-center gap-x-4 p-2 hover:bg-slate-800 rounded-md cursor-pointer">
              <span className="text-xl">👤</span>
              <span className={`duration-200 ${!isOpen && 'hidden'}`}>Profile</span>
            </li>
            <li className="flex items-center gap-x-4 p-2 hover:bg-slate-800 rounded-md cursor-pointer">
              <span className="text-xl">⚙️</span>
              <span className={`duration-200 ${!isOpen && 'hidden'}`}>Settings</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content View */}
      <main className="flex-1 px-7 font-semibold text-2xl">
       <MainContainer/>
      </main>
    </div>
  );
}