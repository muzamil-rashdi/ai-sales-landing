import React from 'react';

const CaseStudies = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16">
          <div>
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              CASE STUDY
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client success stories through<br />
              our solutions
            </h2>
            
            <p className="text-lg text-gray-600">
              Cold outreach is time-consuming and hard to scale. Writing emails, remembering follow-ups, and scheduling calls eats up your day.
            </p>
          </div>
          
          <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-colors mt-8 sm:mt-0">
            Explore all
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Healthcare Team Meeting</span>
            </div>
            <div className="p-8">
              <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                HEALTHCARE
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Making an Impact: Transforming a Healthcare Platform's Rebuild
              </h3>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Startup Team Meeting</span>
            </div>
            <div className="p-8">
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                STARTUP
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Optimizing Conversions: A Tech Startup's Leap
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;