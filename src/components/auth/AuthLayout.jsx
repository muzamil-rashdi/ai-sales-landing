import React from 'react';

const AuthLayout = ({ title, subtitle, children, footer, showGoogle = true }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8 relative -z-20 bg-[#FEFAF6]">
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Base gradient background */}
        <img 
          src="/assets/images/bg-gradient.jpg" 
          alt="Background gradient"
          className="w-full h-full object-cover  " 
          style={{ width: '100%', height: '70%',clipPath: 'polygon(0 0, 100% 0, 100% 10%, 0 100%)' }}
        />
        {/* Noisy overlay with 25% opacity */}
        <img 
          src="/assets/images/bgnosiy.jpg" 
          alt="Background noise"
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-25" 
           style={{ width: '100%', height: '70%',clipPath: 'polygon(0 0, 100% 0, 100% 10%, 0 100%)' }}
        />
      </div>

      {/* Rest of your component remains the same */}
      <div className="w-full max-w-md mx-auto shadow-[0px_4.06px_101.52px_0px_#FE603740]">
        <div className="bg-white py-8 px-6 shadow rounded-2xl sm:px-10">
          <img 
            src="/assets/logos/main-logo.png" 
            alt="AI Sales Logo"
            className="h-8 w-auto mb-4 sm:mb-[1rem]" 
          />

          {showGoogle && (
            <>
              <div className="mb-6">
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <img
                    src="/assets/icons/devicon_google.png"
                    alt="Google logo"
                    className="w-5 h-5 mr-2"
                  />
                  Continue with Google
                </button>
              </div>

              <div className="flex items-center w-full my-6">
                <div className="hidden sm:block w-[252.8px] h-px bg-[#D1D5DB] mr-2" />
                <div className="sm:hidden flex-1 h-px bg-[#D1D5DB] mr-2" />
                <span className="px-2 text-xs sm:text-[12.18px] font-medium text-center font-[Inter] text-[#242424]">
                  Or
                </span>
                <div className="hidden sm:block w-[147.8px] h-px bg-[#D1D5DB] ml-2" />
                <div className="sm:hidden flex-1 h-px bg-[#D1D5DB] ml-2" />
              </div>
            </>
          )}

          <h1 className="text-xl sm:text-[22px] md:text-[24px] font-bold text-[#242424] mb-4 font-[Satoshi Variable]">
            {title}
          </h1>

          {subtitle && (
            <p className="text-sm text-gray-600 mb-6">{subtitle}</p>
          )}

          {children}

          {footer && (
            <div className="mt-6 text-center sm:text-start text-sm">{footer}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;