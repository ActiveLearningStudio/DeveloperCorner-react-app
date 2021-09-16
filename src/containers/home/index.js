import React from "react";
import ApiSection from "./apiContent";
import BusinessProduct from './businessProduct';
import "./styles.scss";

const Index = () => {
  return (
    <div className="main-area">
      <div className="heroSection">
        <div className="container">
          <h2>
            Build Interactive Learning APps with Currik's API and Developer
            Tools
          </h2>
          <p>
            Developer tools and resources to integrate our authoring tool into
            your existing learning technology stack.
          </p>
        </div>
      </div>

      {/* api content */}

      <ApiSection />
      {/* bussines product */}
      <BusinessProduct/>
    </div>
  );
};

export default Index;
