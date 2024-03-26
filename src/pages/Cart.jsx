import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const Cart = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="p-5">
        <h1 className="text-center font-light text-2xl mb-5">YOUR BAG</h1>
        <div className="flex flex-col lg:flex-row items-center justify-between p-5">
  <button className="px-4 py-2 font-semibold cursor-pointer border border-black hover:bg-black hover:text-white mb-5 lg:mb-0 lg:mr-5">
    CONTINUE SHOPPING
  </button>
  <div className="flex mb-5 lg:mb-0">
    <span className="underline cursor-pointer mr-5">Shopping Bag(2)</span>
    <span className="underline cursor-pointer">Your Wishlist (0)</span>
  </div>
  <button className="px-4 py-2 font-semibold cursor-pointer border border-black bg-black text-white">
    CHECKOUT NOW
  </button>
</div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-2/3">
            <div className="flex items-center justify-between mb-5">
              <div className="flex-1 flex items-center">
                <img className="w-40 object-cover mr-4" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="Product 1" />
                <div>
                  <p className="mb-1"><b>Product:</b> JESSIE THUNDER SHOES</p>
                  <p className="mb-1"><b>ID:</b> 93813718293</p>
                  <div className="w-5 h-5 bg-black rounded-full mb-1"></div>
                  <p><b>Size:</b> 37.5</p>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2 gap-3">
                  <button className="px-2 py-1 border border-black rounded-full"><PlusOutlined /></button>
                  <span className="px-4 py-2 border border-black">1</span>
                  <button className="px-2 py-1 border border-black rounded-full"><MinusOutlined /></button>
                </div>
                <p className="text-center">$ 30</p>
              </div>
            </div>
            <hr className="border-gray-200 my-5" />
            <div className="flex items-center justify-between">
              <div className="flex-1 flex items-center">
                <img className="w-40 object-cover mr-4" src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="Product 2" />
                <div>
                  <p className="mb-1"><b>Product:</b> HAKURA T-SHIRT</p>
                  <p className="mb-1"><b>ID:</b> 93813718293</p>
                  <div className="w-5 h-5 bg-gray-500 rounded-full mb-1"></div>
                  <p><b>Size:</b> M</p>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2 gap-3">
                  <button className="px-2 py-1 border border-black rounded-full"><PlusOutlined /></button>
                  <span className="px-4 py-2 border border-black">1</span>
                  <button className="px-2 py-1 border border-black rounded-full"><MinusOutlined /></button>
                </div>
                <p className="text-center">$ 20</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 ml-0 lg:ml-5 p-5 border border-gray-200 rounded">
            <h1 className="text-center font-light text-2xl mb-5">ORDER SUMMARY</h1>
            <div className="mb-5 flex justify-between">
              <p>Subtotal</p>
              <p>$ 80</p>
            </div>
            <div className="mb-5 flex justify-between">
              <p>Estimated Shipping</p>
              <p>$ 5.90</p>
            </div>
            <div className="mb-5 flex justify-between">
              <p>Shipping Discount</p>
              <p>$ -5.90</p>
            </div>
            <div className="mb-5 flex justify-between">
              <p>Total</p>
              <p>$ 80</p>
            </div>
            <button className="w-full px-4 py-2 font-semibold cursor-pointer border border-black bg-black text-white">
              CHECKOUT NOW
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
