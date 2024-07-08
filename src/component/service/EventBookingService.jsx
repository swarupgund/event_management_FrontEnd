import axios from "axios";
const API_BASE_URL = "http://localhost:8080/Events";

class EventBookingService {
  loadEventData(eventCategory) {
    return axios.get(`${API_BASE_URL}/BookingPage`, {
      params: { eventCategory },
    });
  }
  // Load user bookings
  getUserBookings(userEmail) {
    return axios.get(`${API_BASE_URL}/booking`, {
      params: { userEmail },
    });
  }
  // Cancel user booking by ID
  cancelUserBooking(id) {
    return axios.get(`${API_BASE_URL}/deleteUserBooking`, {
      params: { id },
    });
  }
}

export default EventBookingService();
