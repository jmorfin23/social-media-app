import React from "react";
import "./index.css";

export default  ({ staticContext = {} }) => {
  staticContext.notFound = true;  
    return (
      <section className="error-message">
        <h1 className="error-code">404</h1>
        <p className="error-description">Page not found</p>
        <a href="/login" className="error-link">
          Go to login
        </a>
      </section>
    );
  }

