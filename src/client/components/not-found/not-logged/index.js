import React from "react";
import "../index.css";

export default  ({ staticContext = {} }) => {
  staticContext.notAuthorized = true;  
    return (
      <section className="error-message">
        <p className="error-description">You are not authorized to view this page.</p>
        <a href="/login" className="error-link">
          Go to login
        </a>
      </section>
    );
  }

