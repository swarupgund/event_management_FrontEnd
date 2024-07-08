// import React from "react";
// import "./customStyles.css"; // Import the custom CSS file

// const DashBoardMain = () => {
//   return (
//     <section className="px-6 py-8 mx-auto" id="Dashboard">
//       <h1 className="text-2xl font-semibold text-gray-900 mb-6">
//         Event Dashboard
//       </h1>
//       <table className="table">
//         <thead>
//           <tr>
//             <th className="bg-gray-200">Sr No</th>
//             <th className="bg-gray-200">Event Name</th>
//             <th className="bg-gray-200">Event Date</th>
//             <th className="bg-gray-200">Status</th>
//             <th className="bg-gray-200">Payment Status</th>
//             <th className="bg-gray-200">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="bg-gray-100">
//             <td>1</td>
//             <td>Event A</td>
//             <td>2024-04-10</td>
//             <td>Booked</td>
//             <td>Paid</td>
//             <td>
//               <button className="delete-button">Delete</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <button className="add-button mt-4">Add Event</button>
//     </section>
//   );
// };

// export default DashBoardMain;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./customStyles.css"; // Import the custom CSS file

// const DashBoardMain = ({ userEmail }) => {
//   const [bookings, setBookings] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!userEmail) {
//       setError("User email not found");
//       return;
//     }

//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:8080/api/Events/booking?email=${userEmail}`,
//           {
//             withCredentials: true, // Ensure credentials are sent along with the request
//           }
//         );
//         setBookings(response.data);
//       } catch (error) {
//         // console.error("Error fetching bookings:", error);
//         console.log(error);
//         setError("Failed to fetch bookings");
//       }
//     };

//     fetchBookings();
//   }, [userEmail]);

//   const handleDelete = async (bookingId) => {
//     try {
//       await axios.delete(
//         `http://localhost:8080/api/Events/booking/${bookingId}`,
//         {
//           withCredentials: true,
//         }
//       );
//       setBookings(bookings.filter((booking) => booking.id !== bookingId));
//     } catch (error) {
//       // console.error("Error deleting booking:", error);
//       console.log(error);
//       setError("Failed to delete booking");
//     }
//   };

//   return (
//     <section className="px-6 py-8 mx-auto" id="Dashboard">
//       <h1 className="text-2xl font-semibold text-gray-900 mb-6">
//         Event Dashboard
//       </h1>
//       {error && <p className="text-red-500">{error}</p>}
//       <table className="table">
//         <thead>
//           <tr>
//             <th className="bg-gray-200">Sr No</th>
//             <th className="bg-gray-200">Event Name</th>
//             <th className="bg-gray-200">Event Date</th>
//             <th className="bg-gray-200">Status</th>
//             <th className="bg-gray-200">Payment Status</th>
//             <th className="bg-gray-200">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.length === 0 ? (
//             <tr>
//               <td colSpan="6" className="text-center">
//                 No bookings found
//               </td>
//             </tr>
//           ) : (
//             bookings.map((booking, index) => (
//               <tr key={booking.id} className="bg-gray-100">
//                 <td>{index + 1}</td>
//                 <td>{booking.eventName}</td>
//                 <td>{booking.date}</td>
//                 <td>{booking.status}</td>
//                 <td>{booking.paymentStatus}</td>
//                 <td>
//                   <button
//                     className="delete-button"
//                     onClick={() => handleDelete(booking.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//       <button className="add-button mt-4">Add Event</button>
//     </section>
//   );
// };

// export default DashBoardMain;

//344 start
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./customStyles.css";
import { useNavigate } from "react-router-dom";

const DashBoardMain = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEvent = () => {
    navigate("/Events");
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/bookings");
        if (response.data === "User not logged in") {
          setError("User not logged in");
          setLoading(false);
          return;
        }
        setBookings(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setError("Error fetching bookings");
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/bookings/${id}`);
      setBookings(bookings.filter((booking) => booking.id !== id));
    } catch (error) {
      console.error("Error deleting booking:", error);
      setError("Error deleting booking");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="px-6 py-8 mx-auto" id="Dashboard">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Event Dashboard
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th className="bg-gray-200">Sr No</th>
            <th className="bg-gray-200">Event Name</th>
            <th className="bg-gray-200">Event Date</th>
            <th className="bg-gray-200">Attendees</th>
            <th className="bg-gray-200">Payment Status</th>
            <th className="bg-gray-200">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking.id} className="bg-gray-100">
              <td>{index + 1}</td>
              <td>{booking.eventName}</td>
              <td>{booking.date}</td>
              <td>{booking.attendees}</td>
              <td>{booking.amount}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(booking.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleEvent} className="add-button mt-4">
        Add Event
      </button>
    </section>
  );
};

export default DashBoardMain;
