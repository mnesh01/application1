import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

const steps = ["Personal Details", "Profile", "Review & Submit"];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    gender: "",
    resume: null,
    psummary: "",
    hearposition: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const validationSchema = [
    Yup.object({
      firstname: Yup.string().required("Required"),
      lastname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string().required("Required"),
      gender: Yup.string().required("Select a gender")

    }),
    Yup.object({
      resume: Yup.mixed().required("Resume is required"),
    }),
    Yup.object({
      psummary: Yup.string().required("Required"),
    }),
    Yup.object({
      hearposition: Yup.string().required("Required"),
      })
  ];

  const handleNext = (values) => {
    setFormData({ ...formData, ...values });
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("Application submitted successfully!");
    }, 2000);
  };

  return (
    <div className="container mt-5" style={{ fontFamily: "Roboto", maxWidth: "600px" }}>
      <h2 className="text-primary">{steps[step]}</h2>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema[step]}
        onSubmit={step === steps.length - 1 ? handleSubmit : handleNext}
      >
        {({ setFieldValue }) => (
          <Form>
            {step === 0 && (
              <>
                <div className="mb-3">
                  <label>First Name</label>
                  <Field name="firstname" className="form-control" />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label>Last Name</label>
                  <Field name="lastname" className="form-control" />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label>Phone</label>
                  <Field name="phone" className="form-control" />
                  <ErrorMessage name="phone" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                    <label>Gender</label>
                    <Field as="select" name="gender" className="form-control">
                     <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
            </Field>
            <ErrorMessage name="gender" component="div" className="text-danger" />
          </div>
              </>
            )}
            {step === 1 && (
               <>
               <div className="mb-3">
                <label>Resume Upload</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(event) => setFieldValue("resume", event.currentTarget.files[0])}
                />
                <ErrorMessage name="resume" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label>Personal summary</label>
                <Field name="psummary" className="form-control" />
                <ErrorMessage name="experience" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                    <label>How did you hear about us</label>
                    <Field as="select" name="hearposition" className="form-control">
                     <option value="">Select option</option>
                    <option value="linkedin">Linkedin</option>
                    <option value="boards">Job boards</option>
                    <option value="website">Career website</option>
                    <option value="referall">Referall</option>
                    <option value="others">Others</option>
                    </Field>
                    <ErrorMessage name="hearposition" component="div" className="text-danger" />
              </div>
              </>  
            )}
            {step === 2 && (
              <div>
                <h4>Review Your Details</h4>
                <p><strong>First Name:</strong> {formData.firstname}</p>
                <p><strong>Last Name:</strong> {formData.lastname}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Gender:</strong> {formData.gender}</p>
                <p><strong>Resume:</strong> {formData.resume?.name || "Not uploaded"}</p>
                <p><strong>Personal summary:</strong> {formData.psummary}</p>
                <p><strong>Hear about us:</strong> {formData.hearposition}</p>
              </div>
            )}
            <div className="d-flex justify-content-between mt-4">
              {step > 0 && (
                <button type="button" className="btn btn-secondary" onClick={handlePrev}>
                  Back
                </button>
              )}
              <button type="submit" className="btn btn-primary">
                {step === steps.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {loading && <div className="mt-3 text-primary">Submitting...</div>}
      {successMessage && <div className="mt-3 text-success">{successMessage}</div>}
    </div>
  );
};

export default MultiStepForm;