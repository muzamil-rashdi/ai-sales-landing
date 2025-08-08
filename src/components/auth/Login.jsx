import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import AuthForm from './AuthForm';

const Login = () => {
const fields = [
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
    placeholder: 'Enter your password'
  }
];

return (
  <AuthLayout
    title="Sign in to your account"
    footer={
      <>
        <span className="text-gray-600">Don't have an account? </span>
        <Link to="/signup" className="font-medium text-black-600 hover:text-orange-500 underline">
          Sign Up
        </Link>
      </>
    }
  >
    <AuthForm 
      fields={fields}
      submitText="Login"
      showRememberMe={true}
      showForgotPassword={true}
    />
  </AuthLayout>
);
};

export default Login;