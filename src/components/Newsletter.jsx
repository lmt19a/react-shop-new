import { SendOutlined } from "@ant-design/icons";
import "../css/Newletter.css"

const Newsletter = () => {
  return (
    <div className="newsletter-container flex flex-col items-center justify-center h-60v lg:h-auto bg-gray-100 py-8 mt-12" style={{ backgroundColor: '#fcf5f5' }}>
      <h1 className="newsletter-heading text-3xl lg:text-5xl font-bold mb-4">Newsletter</h1>
      <p className="newsletter-description text-lg lg:text-xl text-center mb-4">Get timely updates from your favorite products.</p>
      <div className="w-full lg:w-1/2 flex">
        <input className="input flex-grow mr-2 py-3 px-4 rounded-l-md" type="text" placeholder="Your email" />
        <button className="button bg-teal-500 text-white py-3 px-4 rounded-r-md"><SendOutlined /></button>
      </div>
    </div>
  );
};

export default Newsletter;
