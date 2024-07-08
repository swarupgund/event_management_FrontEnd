import React, { useState, useEffect } from "react";
import Navigation from "../navigation/Navigation";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import axios from "axios";
import { toast } from "react-toastify";

const BookEventForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    address: "",
    eventName: "",
    attendees: "",
    date: "",
    amount: "",
    email: "",
  });

  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  // const email = "swarupgund10@gmail.com";
  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/user?email`);
      console.log("response ", response);
      const { userName, email } = response.data;
      setUser(response.data);
      setFormData((prevFormData) => ({
        ...prevFormData,
        userName,
      }));
    } catch (error) {
      console.log("Failed to fetch user details:", error);
    }
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/Form/saveForm",
        formData
      );
      if (response.status === 201) {
        setMessage("Booking successful");
        console.log("Booking successful");
        navigate("/Dashboard");
      }
    } catch (error) {
      console.log("Error:", error);
      if (error.response && error.response.status === 500) {
        setMessage("Booking failed");
        console.log("Booking failed");
      } else {
        setMessage("An error occurred");
        console.log("An error occurred");
      }
    }
  };

  return (
    <div>
      <Navigation />
      <section
        className="bg-gray-50 dark:bg-gray-900"
        id="book"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 lg:flex-row">
          <div className="lg:w-1/2">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Book Event
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    {/* <div>
                      <label
                        htmlFor="phoneNo"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        value={formData.attendees}
                        onChange={handleChange}
                        type="tel"
                        name="phoneNo"
                        id="phoneNo"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Phone Number"
                        required
                      />
                    </div> */}
                    <div>
                      <label
                        htmlFor="address"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Address
                      </label>
                      <input
                        value={formData.address}
                        onChange={handleChange}
                        type="text"
                        name="address"
                        id="address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Address"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="eventName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Event Type
                      </label>
                      <select
                        value={formData.eventName}
                        onChange={handleChange}
                        name="eventName"
                        id="eventName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      >
                        <option value="">Select Event Type</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Corporate">Corporate</option>
                        <option value="Exhibitions">Exhibitions</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="attendees"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Number of Attendees
                      </label>
                      <input
                        value={formData.attendees}
                        onChange={handleChange}
                        type="number"
                        name="attendees"
                        id="attendees"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Number of Attendees"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="date"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Event Date
                      </label>
                      <input
                        value={formData.date}
                        onChange={handleChange}
                        type="date"
                        name="date"
                        id="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="amount"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        amount
                      </label>
                      <input
                        value={formData.amount}
                        onChange={handleChange}
                        type="number"
                        name="amount"
                        id="amount"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="amount"
                        required
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full text-white  bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded "
                      >
                        Book Now
                      </button>
                    </div>
                    {message && (
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {message}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookEventForm;
