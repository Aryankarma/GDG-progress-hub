import React from "react";
import "../styles/login.css";
import Navbar from "../components/Navbar";
export default function Login() {
  return (
    <div className="container h-screen flex items-center justify-center">
      <div className="login-box">
        <img src="./logo.png" alt="Google Developer Logo" />

        <h1>Sign in</h1>
        <select className="role-select">
          <option value="">Select Team</option>
          <option value="Technical">Technical</option>
          <option value="Graphics">Graphics</option>
          <option value="Social">Social Media Management</option>
          <option value="Video">Video/Photograpgy</option>
          <option value="Content">Content</option>
          <option value="Sponsorship">Sponsorship Management</option>
          <option value="Event">Event Management</option>
          <option value="Community">Community</option>
        </select>

        <input type="password" placeholder="Enter your password" />

        <button type="submit">Sign in</button>
      </div>
    </div>
  );
}
