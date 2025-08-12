import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import AuthForm from './AuthForm';

const SignUp = () => {
const fields = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'Full name',
    placeholder: 'e.g. Jane Doe'
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'e.g. janedoe@example.com'
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Create 8 character password'
  }
];

return (
  <AuthLayout
    title="Create your account"
    footer={
      <>
        <span className="font-satoshi text-gray-600">Already have an account? </span>
        <Link to="/login" className="font-satoshi font-medium text-black-600 hover:text-orange-500 underline">
          Sign In
        </Link>
      </>
    }
  >
    <AuthForm 
      fields={fields}
      submitText="Create Account"
    />
  </AuthLayout>
);
};

export default SignUp;