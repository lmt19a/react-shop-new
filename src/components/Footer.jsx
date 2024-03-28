import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  PinterestOutlined,
  HeatMapOutlined,
  XOutlined,
} from "@ant-design/icons";
import '../css/Footer.css'

const Footer = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row lg:gap-14">
        <div className="w-full lg:w-1/3 lg:mr-8 mb-8 lg:mb-0">
          <h1 className="text-2xl font-bold mb-4">LAMA.</h1>
          <p className="text-sm mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </p>
          <div className="flex flex-row">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
              <FacebookOutlined className="text-white" />
            </div>
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-4">
              <InstagramOutlined className="text-white" />
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-4">
              <XOutlined className="text-white" />
            </div>
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <PinterestOutlined className="text-white" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:mr-8 mb-8 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 list-none">
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Home</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Cart</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Man Fashion</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Woman Fashion</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Accessories</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">My Account</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Order Tracking</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Wishlist</a></li>
            <li className="mb-2"><a href="#" className="text-gray-600 hover:text-black">Terms</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="mb-4"><HeatMapOutlined className="mr-2" />622 Dixie Path, South Tobinchester 98336</div>
          <div className="mb-4"><PhoneOutlined className="mr-2" />+1 234 56 78</div>
          <div className="mb-4"><MailOutlined className="mr-2" />contact@lama.dev</div>
          <img
            className="w-32"
            src="https://i.ibb.co/Qfvn4z6/payment.png"
            alt="Payment methods"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
