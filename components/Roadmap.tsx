
import React from 'react';
import { STEPS } from '../constants';

const Roadmap: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-800">The 6-Step Process</h2>
        <p className="text-slate-500 mt-2">Follow these steps carefully to ensure a smooth application process.</p>
      </div>

      <div className="relative">
        {/* Timeline connector */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2 hidden sm:block"></div>

        <div className="space-y-12 relative">
          {STEPS.map((step, index) => (
            <div 
              key={step.id} 
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Card */}
              <div className="flex-1 w-full">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-green-300 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{step.icon}</span>
                    <h3 className="text-lg font-bold text-slate-800">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{step.description}</p>
                  <div className="bg-slate-50 p-4 rounded-xl">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {step.requirements.map((req, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="text-green-500">•</span> {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {step.actionLink && (
                    <a 
                      href={step.actionLink} 
                      target="_blank" 
                      className="mt-4 inline-block text-green-600 text-sm font-bold hover:underline"
                    >
                      Official Link →
                    </a>
                  )}
                </div>
              </div>

              {/* Number circle */}
              <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold text-xl shadow-lg border-4 border-white">
                {step.id}
              </div>

              {/* Spacer for alignment */}
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
