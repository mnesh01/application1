import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h2 className="text-success">Application Submitted Successfully! 🎉</h2>
      <p>We have received your application. We will get back to you soon.</p>
      <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default SuccessPage;