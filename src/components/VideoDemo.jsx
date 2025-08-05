import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const VideoDemo = () => {
  return (
    <section className="bg-orange-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900"></div>
          
          <div className="relative z-10">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Play className="w-8 h-8 text-white" />
            </div>
            
            <div className="text-6xl font-bold text-white mb-4">
              AI<br />SALES
            </div>
            
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs">Person</span>
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;