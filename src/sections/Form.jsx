import React, { useState } from "react";
import "../styles/Form.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

function FormComponent() {
  const location = useLocation();
  const {eventCategoryType,eventName} = location.state || {};

  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    registrationNumber: "",
    department: "",
    gradYear: "",
    collegeEmail: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      console.log("failed");
      setValidated(true);
      return;
    }

    setValidated(true);

    const updatedFormData = {
      ...formData,
      gradYear: parseInt(formData.gradYear, 10), // Convert gradYear to a Number
      eventCategoryType,
      eventName,
    };
    
    console.log(updatedFormData);

    try {
      const response = await axios.post("http://localhost:5000/api/users", updatedFormData);

      if (response.status === 200) {
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          contactNumber: "",
          registrationNumber: "",
          department: "",
          gradYear: "",
          collegeEmail: "",
        });
        setValidated(false);
      } else {
        alert(`Error: ${response.data.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="event-form-container">
      <button
        className="event-back-button"
        onClick={() => window.history.back()}
      >
        Back
      </button>
      <h1 className="event-form-title">Event Registration</h1>
      <h2 className="event-subtitle">{`${eventCategoryType} - ${eventName}`}</h2>

      <form
        noValidate
        className={`event-form ${validated ? "event-form-validated" : ""}`}
        onSubmit={handleSubmit}
      >
        {/* Full Name */}
        <div className="event-name-fields">
          <div className="event-form-group">
            <label htmlFor="firstName" className="event-form-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="event-form-input"
              placeholder="First name"
              required
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="event-form-group">
            <label htmlFor="lastName" className="event-form-label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="event-form-input"
              placeholder="Last name"
              required
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Contact Number */}
        <div className="event-form-group">
          <label htmlFor="contactNumber" className="event-form-label">
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            className="event-form-input"
            placeholder="Contact Number"
            required
            pattern="[0-9]{10}"
            value={formData.contactNumber}
            onChange={handleInputChange}
          />
        </div>

        {/* Registration Number and Department */}
        <div className="event-name-fields">
          <div className="event-form-group">
            <label htmlFor="registrationNumber" className="event-form-label">
              Registration Number
            </label>
            <input
              type="text"
              id="registrationNumber"
              className="event-form-input"
              placeholder="Registration number"
              required
              value={formData.registrationNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="event-form-group">
            <label htmlFor="department" className="event-form-label">
              Department
            </label>
            <input
              type="text"
              id="department"
              className="event-form-input"
              placeholder="Department"
              required
              value={formData.department}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Year of Graduation */}
        <div className="event-form-group">
          <label htmlFor="gradYear" className="event-form-label">
            Year of Graduation
          </label>
          <input
            type="number"
            id="gradYear"
            className="event-form-input"
            placeholder="Year of Graduation"
            required
            value={formData.gradYear}
            onChange={handleInputChange}
          />
        </div>

        {/* College Email ID */}
        <div className="event-form-group">
          <label htmlFor="collegeEmail" className="event-form-label">
            College Email ID
          </label>
          <input
            type="email"
            id="collegeEmail"
            className="event-form-input"
            placeholder="College email ID"
            required
            value={formData.collegeEmail}
            onChange={handleInputChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="event-submit-button">
          Submit form
        </button>
      </form>
    </div>
  );
}

export default FormComponent;