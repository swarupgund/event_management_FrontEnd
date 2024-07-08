import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navigation = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from backend using email address
    const fetchUserDetails = async () => {
      try {
        const email = localStorage.getItem("userEmail"); // Assuming email is stored in localStorage after login
        if (email) {
          const response = await axios.get(
            `http://localhost:8080/api/user?email=${email}`
          );
          setUser(response.data);
        }
      } catch (error) {
        console.log("Failed to fetch user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleLogout = () => {
    // Perform logout operations (e.g., clearing tokens, redirecting to login)
    localStorage.removeItem("userEmail");
    navigate("/AuthForm");
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="text-2xl">🎉</span>
          <span className="ml-3 text-xl">Eventify</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/Home" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/Events" className="mr-5 hover:text-gray-900">
            Events
          </Link>
          <a href="#gallery" className="mr-5 hover:text-gray-900">
            Gallery
          </a>
          <a href="#ourwork" className="mr-5 hover:text-gray-900">
            Our Work
          </a>
          <a href="#testimonials" className="mr-5 hover:text-gray-900">
            Testimonials
          </a>
          <Link to="/DashBoard" className="mr-5 hover:text-gray-900">
            DashBoard
          </Link>
        </nav>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            {user ? user.userName : "Account"}
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
              {user && (
                <>
                  <div className="px-4 py-2 text-sm text-gray-700">
                    Name: {user.userName}
                  </div>
                  <div className="px-4 py-2 text-sm text-gray-700">
                    Phone: {user.userPhone}
                  </div>
                  <div className="px-4 py-2 text-sm text-gray-700">
                    Email: {user.userEmail}
                  </div>
                  <hr />
                </>
              )}
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
