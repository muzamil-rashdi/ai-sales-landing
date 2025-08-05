import React from 'react';

const ProblemSection = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              FACING CHALLENGES
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Manual outreach work is<br />
              slowing you down.<br />
              Here's how we're fixing it.
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Cold outreach is time-consuming and hard to scale. Writing emails, remembering 
              follow-ups, and scheduling calls eats up your day — especially when you're 
              doing it all yourself. For busy founders and small teams, it quickly becomes a 
              drain on time, energy, and growth.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Comment and tag teammates directly within contracts",
                "Assign tasks and review notes in real-time",
                "Keep all communication contextually linked to clauses"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-colors">
              Learn more
            </button>
          </div>

          <div className="relative">
            <div className="bg-gray-100 rounded-2xl p-8 relative">
              <div className="absolute top-4 right-4 space-y-2">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">LOST OPPORTUNITIES</div>
                <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">LACK OF EXPERTISE</div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">LIMITED SUCCESS</div>
              </div>
              
              <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Stressed Person</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;