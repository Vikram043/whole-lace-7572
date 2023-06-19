import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const ContactUs = () => {
    return (
        <div>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <Navbar/>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center">
                  <svg
                    className="h-6 w-6 text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-semibold text-gray-800">
                  Contact Us
                </h2>
              </div>
              <div className="divide-y divide-gray-200">
                <form className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">Name</label>
                    <input
                      type="text"
                      className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Email</label>
                    <input
                      type="email"
                      className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Message</label>
                    <textarea
                      className="px-4 py-2 h-24 border rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    );
  };
  
  export default ContactUs;
  