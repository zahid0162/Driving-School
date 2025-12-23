
import React from 'react';
import { AppView } from '../types';

interface SidebarProps {
  activeView: AppView;
  onSelectView: (view: AppView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onSelectView }) => {
  const menuItems = [
    { id: AppView.DASHBOARD, label: "Dashboard", icon: "🏠" },
    { id: AppView.ROADMAP, label: "Roadmap", icon: "🗺️" },
    { id: AppView.PRACTICE_EXAM, label: "Practice Exam", icon: "📝" },
    { id: AppView.TRAFFIC_SIGNS, label: "Traffic Signs", icon: "🚦" },
    { id: AppView.AI_ASSISTANT, label: "AI Guide", icon: "🤖" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-900 text-white min-h-screen">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center font-bold text-xl">
              🇸🇦
            </div>
            <span className="font-bold text-lg tracking-tight">Saudi Driver</span>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2 mt-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectView(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeView === item.id
                  ? "bg-green-600 text-white shadow-lg"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-6 text-xs text-slate-500 border-t border-slate-800">
          © 2024 Saudi Driver Guide v1.0
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around py-3 px-2 z-50">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectView(item.id)}
            className={`flex flex-col items-center gap-1 min-w-[64px] ${
              activeView === item.id ? "text-green-600" : "text-slate-400"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[10px] font-medium uppercase">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
