import React from "react";
import "../css/login.css"

const Login = () => {
  return (
    <div className="image min-h-screen flex items-center justify-center from-blue-400 to-indigo-600">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">SIGN IN</h1>
        <form className="space-y-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Username"
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Password"
          />
          <button className="w-full bg-blue-500 text-white font-semibold rounded-md py-2 transition duration-500 ease-in-out transform hover:scale-105 hover:bg-blue-600">
            LOGIN
          </button>
          <div className="flex justify-between text-sm">
            <a className="text-blue-600 hover:underline" href="#">
              Forgot Password?
            </a>
            <a className="text-blue-600 hover:underline" href="#">
              Create an Account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
