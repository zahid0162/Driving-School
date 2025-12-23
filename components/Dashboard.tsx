
import React from 'react';
import { AppView } from '../types';

interface DashboardProps {
  onViewChange: (view: AppView) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onViewChange }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey to Freedom</h2>
          <p className="text-green-50 mb-6 text-lg">
            Everything you need to get your Saudi Arabian Driver's License in one place. 
            From Absher appointments to passing the final road test.
          </p>
          <button 
            onClick={() => onViewChange(AppView.ROADMAP)}
            className="bg-white text-green-700 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-colors shadow-lg"
          >
            Explore Roadmap →
          </button>
        </div>
        {/* Decorative element */}
        <div className="absolute top-0 right-0 h-full w-1/3 opacity-10 flex items-center justify-center transform translate-x-10 translate-y-10">
           <span className="text-[200px] grayscale brightness-200">🇸🇦</span>
        </div>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard 
          title="Practice Exam" 
          description="Simulate the real computer test with questions on traffic laws and safety."
          icon="📝"
          buttonText="Start Quiz"
          onClick={() => onViewChange(AppView.PRACTICE_EXAM)}
          color="blue"
        />
        <DashboardCard 
          title="Sign Library" 
          description="Learn the meanings of all regulatory, warning, and prohibitory signs in KSA."
          icon="🚦"
          buttonText="Study Signs"
          onClick={() => onViewChange(AppView.TRAFFIC_SIGNS)}
          color="amber"
        />
        <DashboardCard 
          title="AI Assistant" 
          description="Ask our AI expert about specific rules, fines, or registration procedures."
          icon="🤖"
          buttonText="Chat Now"
          onClick={() => onViewChange(AppView.AI_ASSISTANT)}
          color="purple"
        />
      </div>

      <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Quick Links</h3>
        <div className="flex flex-wrap gap-4">
          <a href="https://www.absher.sa/" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors font-medium">
             <span>🔑</span> Absher Portal
          </a>
          <a href="https://www.dallah-driving-school.com/" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors font-medium">
             <span>🏫</span> Dallah School
          </a>
          <a href="https://www.moi.gov.sa/" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors font-medium">
             <span>📜</span> Ministry of Interior
          </a>
        </div>
      </section>
    </div>
  );
};

const DashboardCard: React.FC<{
  title: string;
  description: string;
  icon: string;
  buttonText: string;
  onClick: () => void;
  color: 'blue' | 'amber' | 'purple' | 'green';
}> = ({ title, description, icon, buttonText, onClick, color }) => {
  const colorClasses = {
    blue: 'border-blue-100 bg-blue-50/50 hover:bg-blue-50 group',
    amber: 'border-amber-100 bg-amber-50/50 hover:bg-amber-50 group',
    purple: 'border-purple-100 bg-purple-50/50 hover:bg-purple-50 group',
    green: 'border-green-100 bg-green-50/50 hover:bg-green-50 group',
  };

  const btnClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700 text-white',
    amber: 'bg-amber-600 hover:bg-amber-700 text-white',
    purple: 'bg-purple-600 hover:bg-purple-700 text-white',
    green: 'bg-green-600 hover:bg-green-700 text-white',
  };

  return (
    <div className={`p-6 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 shadow-sm ${colorClasses[color]}`}>
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h4 className="text-xl font-bold text-slate-800 mb-2">{title}</h4>
      <p className="text-slate-600 mb-6 text-sm leading-relaxed">{description}</p>
      <button 
        onClick={onClick}
        className={`w-full py-2 rounded-xl font-bold transition-colors ${btnClasses[color]}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Dashboard;
