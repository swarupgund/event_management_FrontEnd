import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/login", credentials)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert("Login failed: " + error.response.data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="userEmail"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="userPassword"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
