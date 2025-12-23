
import React, { useState } from 'react';
import { AppView } from './types';
import Dashboard from './components/Dashboard';
import Roadmap from './components/Roadmap';
import PracticeExam from './components/PracticeExam';
import TrafficSignLibrary from './components/TrafficSignLibrary';
import AiAssistant from './components/AiAssistant';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard onViewChange={setCurrentView} />;
      case AppView.ROADMAP:
        return <Roadmap />;
      case AppView.PRACTICE_EXAM:
        return <PracticeExam />;
      case AppView.TRAFFIC_SIGNS:
        return <TrafficSignLibrary />;
      case AppView.AI_ASSISTANT:
        return <AiAssistant />;
      default:
        return <Dashboard onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      {/* Sidebar for Desktop / Bottom Nav for Mobile */}
      <Sidebar activeView={currentView} onSelectView={setCurrentView} />
      
      <main className="flex-1 flex flex-col min-h-0 overflow-y-auto pb-20 md:pb-0">
        <Header activeView={currentView} />
        <div className="p-4 md:p-8 max-w-6xl mx-auto w-full">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
