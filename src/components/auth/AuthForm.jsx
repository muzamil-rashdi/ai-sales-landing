import React from 'react';
import { Link } from 'react-router-dom';

const AuthForm = ({ 
fields, 
submitText, 
showRememberMe = false,
showForgotPassword = false 
}) => {
return (
  <form className="space-y-6">
    {fields.map((field, index) => (
      <div key={index}>
        <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
          {field.label}
        </label>
        <input
          id={field.id}
          name={field.name}
          type={field.type}
          required
          placeholder={field.placeholder}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
        />
      </div>
    ))}

    {(showRememberMe || showForgotPassword) && (
      <div className="flex items-center justify-between">
        {showRememberMe && (
          <label className="flex items-center text-sm text-gray-900">
            <input type="checkbox" className="h-4 w-4 text-orange-600 border-gray-300 rounded" />
            <span className="ml-2">Remember me</span>
          </label>
        )}
        {showForgotPassword && (
          <Link to="/reset-password" className="text-sm text-black-600 hover:text-orange-500 underline">
            Forgot password?
          </Link>
        )}
      </div>
    )}

    <button
      type="submit"
      className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FE6037] hover:bg-orange-600"
    >
      {submitText}
    </button>
  </form>
);
};

export default AuthForm;