import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HighlightedText from "../components/HighlightedText";

function Home() {
  const [data, setData] = useState("");
  const [edata, setEData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const resetData = () => {
    setData("");
    setEData(false);
  };

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEData(true);
    }, 1000);
  };

  const handleOutput = (e) => {
    setData(e.target.value);
  };

  const displayData = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector(".dropdown-content");
      if (dropdown && !dropdown.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-[100vh] bg-gradient-to-r from-indigo-50 to-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-8xl p-6 flex flex-col md:flex-row justify-between gap-10">
        {/* Input Section */}
        <div className="flex-1 bg-white shadow-lg rounded-xl p-8 transform transition duration-300 min-h-[30rem] w-[90%] md:w-[60%]">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Enter Data</h2>
          <textarea
            onChange={handleOutput}
            value={data}
            className="w-full h-80 p-4 border border-gray-300 rounded-lg resize-none outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
            placeholder="Type something..."
          ></textarea>
          <div className="flex justify-between mt-6">
            <button
              onClick={resetData}
              className="py-3 px-6 w-36 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
            >
              Reset
            </button>

            <button className="flex items-center p-3 justify-start gap-2 w-36 bg-[#A1FF14] text-[#131313] font-semibold rounded-lg shadow-md transition duration-500 ease-in-out transform hover:bg-[#C0FF14] active:scale-95">
              <svg
                className="h-6 transition-transform duration-150"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
              </svg>
              Browse
            </button>

            <button
              onClick={handleClick}
              disabled={loading}
              className={`py-3 px-6 w-36 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition ${
                loading ? "cursor-not-allowed opacity-70" : ""
              }`}
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
        </div>

        {/* Output Section */}
        <div className="flex-1 bg-white shadow-lg rounded-xl p-8 transform transition duration-300 min-h-[35rem] w-[90%] md:w-[60%]">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Generated Data</h2>
          <div className="w-full h-80 p-4 border border-gray-300 rounded-lg text-lg overflow-auto bg-gray-50">
            {edata ? <HighlightedText /> : <span className="text-gray-400">No data generated yet</span>}
          </div>

          <div className="flex justify-between mt-6 relative items-center">
            {/* Share Via Button with Dropdown */}
            <div className="relative flex items-center">
              <button
                onClick={toggleDropdown}
                className="py-3 px-6 w-36 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition flex items-center"
              >
                Share Via{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="ml-2"
                >
                  <path d="M 18 2 A 3 3 0 0 0 15 5 A 3 3 0 0 0 15.054688 5.5605469 L 7.9394531 9.7109375 A 3 3 0 0 0 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 7.9355469 14.287109 L 15.054688 18.439453 A 3 3 0 0 0 15 19 A 3 3 0 0 0 18 22 A 3 3 0 0 0 21 19 A 3 3 0 0 0 18 16 A 3 3 0 0 0 16.0625 16.712891 L 8.9453125 12.560547 A 3 3 0 0 0 9 12 A 3 3 0 0 0 8.9453125 11.439453 L 16.060547 7.2890625 A 3 3 0 0 0 18 8 A 3 3 0 0 0 21 5 A 3 3 0 0 0 18 2 z"></path>
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white border rounded-lg shadow-lg mt-2 w-40 z-10">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">PrivacyShield</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Google Drive</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Copy</a>
                </div>
              )}
            </div>

            <button
              onClick={displayData}
              className="py-3 px-6 w-36 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Link to Dashboard */}
      <Link to={"/dashboard"} className="mt-8 text-indigo-600 hover:text-indigo-800 transition">
        Go To Dashboard
      </Link>
    </div>
  );
}

export default Home;
