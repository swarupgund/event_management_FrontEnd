// EventService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/EventManagement';  // Replace with your actual backend URL

class EventService {
    // Load index page
    loadIndex() {
        return axios.get(`${API_BASE_URL}/app`);
    }

    // Open signup page
    openSignupPage() {
        return axios.get(`${API_BASE_URL}/signuppage`);
    }

    // Open login page
    openLoginPage() {
        return axios.get(`${API_BASE_URL}/loginpage`);
    }

    // Open forgot page
    openForgotPage() {
        return axios.get(`${API_BASE_URL}/forgot`);
    }

    // Open home page
    openHome(session) {
        return axios.get(`${API_BASE_URL}/Home`, { headers: { 'Authorization': session } });
    }

    // User registration
    userRegister(user) {
        return axios.post(`${API_BASE_URL}/userRegister`, user);
    }

    // User login
    userLogin(user) {
        return axios.post(`${API_BASE_URL}/userLogin`, user);
    }

    // Logout user
    logout(session) {
        return axios.get(`${API_BASE_URL}/logout`, { headers: { 'Authorization': session } });
    }

    // Forgot password
    forgotPassword(user) {
        return axios.post(`${API_BASE_URL}/forgotPass`, user);
    }

    // Check email availability
    checkEmail(useremail) {
        return axios.get(`${API_BASE_URL}/checkEmail`, { params: { useremail } });
    }

    // Get all users (admin)
    getAllUsers() {
        return axios.get(`${API_BASE_URL}/users`);
    }

    // Delete user booking by admin
    deleteUserBooking(id) {
        return axios.get(`${API_BASE_URL}/deleteUserBooking`, { params: { id } });
    }

    // Get all bookings (admin)
    getAllBookings() {
        return axios.get(`${API_BASE_URL}/allBookings`);
    }

    // Delete user (admin)
    deleteUser(id) {
        return axios.get(`${API_BASE_URL}/delete`, { params: { id } });
    }
}

export default new EventService();
