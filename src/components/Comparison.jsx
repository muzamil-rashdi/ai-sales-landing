import React from 'react';
import { CheckCircle } from 'lucide-react';

const Comparison = () => {
  const traditionalItems = [
    "Manually finding leads.",
    "Writing every email from scratch.",
    "Inconsistent follow-ups.",
    "Manual meeting scheduling.",
    "Scaling means hiring.",
    "Burnout and fatigue.",
    "Generic messaging."
  ];

  const aiItems = [
    "Automated lead discovery.",
    "AI-written, human-sounding emails.",
    "Smart, timed follow-ups.",
    "Calendar syncing and auto-scheduling.",
    "Scales with you.",
    "More time for high-impact work.",
    "Dynamic personalization."
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            OUR CLIENT'S
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Traditional outreach vs AI-powered sales<br />
            What's the real difference?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Traditional Outreach */}
          <div className="bg-orange-50 rounded-2xl p-8 relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional outreach</h3>
            
            <p className="text-gray-600 mb-8">
              From endless back-and-forth to missed deadlines and hidden risks, traditional contract management is outdated. Our AI automates the heavy lifting—so your team can stay compliant, and focus on what matters.
            </p>

            <div className="space-y-4 mb-8">
              {traditionalItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-xs">Stressed Person</span>
            </div>
          </div>

          {/* AI-Powered Sales */}
          <div className="bg-white rounded-2xl p-8 border-2 border-orange-500 relative">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">△</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">With AI sales</h3>
            </div>
            
            <p className="text-gray-600 mb-8">
              From endless back-and-forth to missed deadlines and hidden risks, traditional contract management is outdated. Our AI automates the heavy lifting—so your team can stay compliant, and focus on what matters.
            </p>

            <div className="space-y-4 mb-8">
              {aiItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-xs">Happy AI Robot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;