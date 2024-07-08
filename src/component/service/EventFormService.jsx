// EventService.js

import axios from "axios";

const API_BASE_URL = "http://localhost:8080/Form"; // Replace with your actual backend URL

class EventFormService {
  // Load event data for booking form
  loadEventData(eventCategory) {
    return axios.get(`${API_BASE_URL}/BookingForm`, {
      params: { eventCategory },
    });
  }

  // Save form data
  saveForm(formData) {
    return axios.post(`${API_BASE_URL}/saveForm`, formData);
  }
}

export default new EventFormService();
