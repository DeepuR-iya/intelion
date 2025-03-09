import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    query: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      number: "",
      email: "",
      query: "",
    });
  };

  return (
    <div className="flex md:flex-row flex-col justify-around p-8 items-center min-h-screen bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us -</h2>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Schedule a Consultation
        </h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Number Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Phone Number
          </label>
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Query Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Your Query
          </label>
          <textarea
            name="query"
            value={formData.query}
            onChange={handleChange}
            rows="4"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
      <div className="md:w-1/2 h-[80vh] w-full  flex flex-col justify-between items-start">
        <div className=" flex md:justify-around justify-between my-5 w-full">
          <div>
            <h1 className="md:text-md font-semibold text-gray-500 my-1 cursor-pointer">
              About Us
            </h1>
            <h1 className="md:text-md font-semibold text-gray-500 my-1 cursor-pointer">
              Blog
            </h1>
            <h1 className="md:text-md font-semibold text-gray-500 my-1 cursor-pointer">
              Projects
            </h1>
          </div>
          <div>
            <h1 className="text-md font-semibold text-gray-500 mb-2 cursor-pointer">
              For Partnering
            </h1>
            <p className="text-sm text-white my-1 ">Consulting Services</p>
            <p className="text-sm text-white mb-1">Partners</p>
            <p className="text-sm text-white">Associates</p>
          </div>
          <div>
            <h1 className="text-md font-semibold text-gray-500 mb-2 cursor-pointer">
              For Company
            </h1>

            <p className="text-sm text-white my-1">Team</p>
            <p className="text-sm text-white">Work</p>
          </div>
        </div>
        <div className="w-full">
          <h1 className="md:text-6xl text-3xl font-bold text-white cursor-pointer">
            Get In Touch
          </h1>
          <hr className="border-t-1 border-white my-2 " />
        </div>
        <div className=" text-white w-full">
          <div className="flex justify-between">
            <p>
              R-7 Street, Yamuna Nagar,
              <br />
              Haryana 135001
            </p>
            <div className="flex md:flex-row flex-col md:gap-4 gap-2 justify-evenly">
              <p className="md:text-3xl cursor-pointer">
                <FaLinkedin />
              </p>
              <p className="md:text-3xl cursor-pointer">
                <FaSquareXTwitter />
              </p>
              <p className="md:text-3xl cursor-pointer">
                <FaFacebookSquare />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
