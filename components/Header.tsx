
import React from 'react';
import { AppView } from '../types';

interface HeaderProps {
  activeView: AppView;
}

const Header: React.FC<HeaderProps> = ({ activeView }) => {
  const titles: Record<AppView, string> = {
    [AppView.DASHBOARD]: "Welcome, Future Driver",
    [AppView.ROADMAP]: "Your Licensing Roadmap",
    [AppView.PRACTICE_EXAM]: "Computer Test Practice",
    [AppView.TRAFFIC_SIGNS]: "Traffic Sign Library",
    [AppView.AI_ASSISTANT]: "AI Traffic Assistant",
  };

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-10 shadow-sm flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold text-slate-800">{titles[activeView]}</h1>
        <p className="text-sm text-slate-500 hidden md:block">Saudi Arabia Driver's License Training Platform</p>
      </div>
      <div className="flex items-center gap-2">
         <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">KSA OFFICIAL GUIDELINES</span>
      </div>
    </header>
  );
};

export default Header;
