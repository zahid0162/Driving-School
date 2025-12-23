
import React, { useState } from 'react';
import { TRAFFIC_SIGNS } from '../constants';

const TrafficSignLibrary: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Regulatory', 'Warning', 'Prohibitory', 'Informational'];

  const filteredSigns = filter === 'All' 
    ? TRAFFIC_SIGNS 
    : TRAFFIC_SIGNS.filter(s => s.category === filter);

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${
              filter === cat 
                ? 'bg-green-600 text-white' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSigns.map(sign => (
          <div key={sign.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
            <div className="h-48 bg-slate-50 flex items-center justify-center p-6 border-b border-slate-100 group-hover:bg-slate-100 transition-colors">
              <img 
                src={sign.imageUrl} 
                alt={sign.name} 
                className="max-h-full max-w-full drop-shadow-sm group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-slate-800">{sign.name}</h3>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                  sign.category === 'Prohibitory' ? 'bg-red-100 text-red-700' :
                  sign.category === 'Regulatory' ? 'bg-blue-100 text-blue-700' :
                  'bg-amber-100 text-amber-700'
                }`}>
                  {sign.category}
                </span>
              </div>
              <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{sign.meaning}</p>
            </div>
          </div>
        ))}
      </div>
      
      {filteredSigns.length === 0 && (
        <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
           <p className="text-slate-400">No signs found for this category yet.</p>
        </div>
      )}
    </div>
  );
};

export default TrafficSignLibrary;
