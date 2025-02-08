import React, { useState } from "react";
import "../styles/Form.css";

function FormComponent() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="event-form-container">
      <button className="event-back-button" onClick={() => window.history.back()}>
        Back
      </button>
      <h1 className="event-form-title">Event Registration</h1>

      <div className="event-category-container">
        <h2 className="event-category-title">Category of event</h2>
        <h3 className="event-category-subtitle">Event name</h3>
        <p className="event-category-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque urna at massa convallis, vitae
          scelerisque arcu efficitur.
        </p>
      </div>

      <form noValidate className={`event-form ${validated ? "event-form-validated" : ""}`} onSubmit={handleSubmit}>
        {/* Full Name (First Name, Last Name) */}
        <div className="event-name-fields">
          <div className="event-form-group">
            <label htmlFor="firstName" className="event-form-label">
              First Name
            </label>
            <input type="text" id="firstName" className="event-form-input" placeholder="First name" required />
            {validated && !document.getElementById("firstName")?.validity.valid && (
              <div className="event-invalid-feedback">Please provide a first name.</div>
            )}
          </div>
          <div className="event-form-group">
            <label htmlFor="lastName" className="event-form-label">
              Last Name
            </label>
            <input type="text" id="lastName" className="event-form-input" placeholder="Last name" required />
            {validated && !document.getElementById("lastName")?.validity.valid && (
              <div className="event-invalid-feedback">Please provide a last name.</div>
            )}
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
          />
          {validated && !document.getElementById("contactNumber")?.validity.valid && (
            <div className="event-invalid-feedback">Please provide a valid 10-digit contact number.</div>
          )}
        </div>

        {/* IIT Dharwad Details */}
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
            />
            {validated && !document.getElementById("registrationNumber")?.validity.valid && (
              <div className="event-invalid-feedback">Please provide your registration number.</div>
            )}
          </div>
          <div className="event-form-group">
            <label htmlFor="department" className="event-form-label">
              Department
            </label>
            <input type="text" id="department" className="event-form-input" placeholder="Department" required />
            {validated && !document.getElementById("department")?.validity.valid && (
              <div className="event-invalid-feedback">Please provide your department.</div>
            )}
          </div>
        </div>

        {/* Year of Graduation */}
        <div className="event-form-group">
          <label htmlFor="gradYear" className="event-form-label">
            Year of Graduation
          </label>
          <input type="number" id="gradYear" className="event-form-input" placeholder="Year of Graduation" required />
          {validated && !document.getElementById("gradYear")?.validity.valid && (
            <div className="event-invalid-feedback">Please provide a valid graduation year.</div>
          )}
        </div>

        {/* College Email ID */}
        <div className="event-form-group">
          <label htmlFor="collegeEmail" className="event-form-label">
            College Email ID
          </label>
          <input type="email" id="collegeEmail" className="event-form-input" placeholder="College email ID" required />
          {validated && !document.getElementById("collegeEmail")?.validity.valid && (
            <div className="event-invalid-feedback">Please provide a valid email address.</div>
          )}
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
