import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import AuthForm from './AuthForm';

const ResetPassword = () => {
const fields = [
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'e.g. janedoe@example.com'
  }
];

return (
  <AuthLayout
    title="Reset your password"
    subtitle="Enter your email and we'll send you a link to reset your password."
    showGoogle={false}
    footer={
      <>
        <span className="text-gray-600">Already have an account? </span>
        <Link to="/login" className="font-medium text-black-600 hover:text-orange-500 underline">
          Sign In
        </Link>
      </>
    }
  >
    <AuthForm 
      fields={fields}
      submitText="Reset Password"
    />
  </AuthLayout>
);
};

export default ResetPassword;