import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">△</span>
              </div>
              <span className="text-xl font-bold text-gray-900">AI SALES</span>
            </div>
            
            <p className="text-gray-600 mb-6 max-w-md">
              Lorem ipsum dolor sit amet consectetur. Adipiscing 
              egestas volutpat tincidunt tempor sit adipiscing tempor 
              adipiscing. In sit.
            </p>
            
            <div>
              <p className="text-gray-900 font-medium mb-2">Follow us:</p>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-bold">Be</span>
                </div>
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-bold">in</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-600 text-xs font-bold">G</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-600 text-xs font-bold">G</span>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Book now</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Job</a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Security</a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">Dark View © 2025. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Privacy policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">GTC</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;