import React, { useState } from "react";
import axios from "axios";

// Create an Axios instance with a custom configuration
const axiosInstance = axios.create({
  baseURL: "https://fs-portfolio-backend.onrender.com", // Replace this with your desired base URL
  // baseURL: "http://localhost:5000", // Replace this with your desired base URL
});

// Define a functional component named Contact
export default function Contact() {
  // Define state variables using useState hook to store form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [phone, setPhone] = useState("");

  // Define a function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Display an alert to indicate that the query is being saved in the database
    alert("Query Saved in our Database. I will connect with you shortly");

    // Send the form data to the server using an HTTP POST request through the axiosInstance
    axiosInstance
      .post("/submit-form", {
        name,
        email,
        phone,
        query,
      })
      .then((response) => {
        // Log the server response data if the request is successful
        console.log(response.data);
        // Reset form fields after successful submission
        setName("");
        setEmail("");
        setQuery("");
        setPhone("");
      })
      .catch((error) => {
        // Log any errors that occurred during the HTTP POST request
        console.log(error);
      });
  };

  // Return JSX (JavaScript XML) to render the contact form
  return (
    <div className="contact">
      <div className="contact-form m-3">
        <h1>Contact</h1>
        <p>Submit the form below to get in touch with me</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Type your Name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Your email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Type your email"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Your Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              pattern="[0-9]{10}"
              placeholder="Type your 10 digit Phone number"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="query" className="form-label">
              Type your Query
            </label>
            <textarea
              className="form-control"
              id="query"
              rows="3"
              value={query}
              required
              onChange={(e) => setQuery(e.target.value)}
            ></textarea>
          </div>
          <div className="button-container">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
