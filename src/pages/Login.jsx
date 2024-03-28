import React from "react";
import "../css/login.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  GoogleOutlined,
  XOutlined // Added this import
} from "@ant-design/icons";

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
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <span className="or-divider"></span>
              <span className="or-text">or</span>
              <span className="or-divider"></span>
            </div>
            <div className="flex flex-row">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 social-icon-container">
                <FacebookOutlined className="text-white" />
              </div>
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-4 social-icon-container">
                <InstagramOutlined className="text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-4 social-icon-container">
                <XOutlined className="text-white" />
              </div>
              <div className="w-10 h-10 google-icon-container rounded-full flex items-center justify-center social-icon-container">
                <GoogleOutlined className="text-white" />
              </div>
            </div>
          </div>
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
