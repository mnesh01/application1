import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    phoneNumber: "",
    email: "",
    country: "",
    resume: null,
    introduction: "",
    gender: "",
    source: "",
    disability: "",
    maritalStatus: "",
    consent: false,
    error: "",
    success: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      setFormData({ ...formData, error: "Check the consent box to submit" });
      return;
    }
    setFormData({ ...formData, error: "", success: true });
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Job Application Form</h2>
      {formData.error && <Alert variant="danger">{formData.error}</Alert>}
      {formData.success && (
        <Alert variant="success">
          You have successfully submitted your application. Thanks! We will get
          back to you as soon as possible.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Country</Form.Label>
          <Form.Control
            as="select"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Kenya">Kenya</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Attach Resume</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Allow us to process your personal information"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit Application
        </Button>
      </Form>
    </Container>
  );
};

export default JobApplicationForm;
