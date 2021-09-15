import React from "react";
import ApiImg1 from "../../assets/images/image28.png";
import ApiImg2 from "../../assets/images/Group353.png";
import ApiImg3 from "../../assets/images/api3.svg";
import ApiImg4 from "../../assets/images/image29.svg";
import Achitect from "../../assets/images/c1.svg";
import Schema from "../../assets/images/c2.svg";
import DeployImg from "../../assets/images/c3.svg";
import Arrow from "../../assets/images/Arrow.svg";

// import ApiImg4 from "../../assets/images/image.png";

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
      <div className="container api-section">
        <h2>WHAT CAN you DO WITH THE CURRIKI API?</h2>
        <div className="api-content">
          <div>
            <h3>Use CurrikiStudio to build and publish interactive courses</h3>
            <p>
              CurrikiStudio is designed to help organizations transform
              curriculum into what drives learner engagement. With a wide
              library of diverse activity types and the ability to completely
              customize the brand experience and publishing destinations,
              CurrikiStudio is the best all-in-one solution for building the
              next generation of learning experiences.
            </p>
            <a href="wwww.curriki.org" target="_blank">
              See documentation
            </a>
          </div>
          <div>
            <img src={ApiImg1} alt="api-content-img" />
          </div>
        </div>

        <div className="api-content">
          <div>
            <img src={ApiImg2} alt="api-content-img" />
          </div>
          <div>
            <h3>Use CurrikiStudio to build and publish interactive courses</h3>
            <p>
              CurrikiStudio is designed to help organizations transform
              curriculum into what drives learner engagement. With a wide
              library of diverse activity types and the ability to completely
              customize the brand experience and publishing destinations,
              CurrikiStudio is the best all-in-one solution for building the
              next generation of learning experiences.
            </p>
            <a href="wwww.curriki.org" target="_blank">
              See documentation
            </a>
          </div>
        </div>

        <div className="api-content">
          <div>
            <h3>Use CurrikiStudio to build and publish interactive courses</h3>
            <p>
              CurrikiStudio is designed to help organizations transform
              curriculum into what drives learner engagement. With a wide
              library of diverse activity types and the ability to completely
              customize the brand experience and publishing destinations,
              CurrikiStudio is the best all-in-one solution for building the
              next generation of learning experiences.
            </p>
            <a href="wwww.curriki.org" target="_blank">
              See documentation
            </a>
          </div>
          <div>
            <img src={ApiImg3} alt="api-content-img" />
          </div>
        </div>

        <div className="api-content">
          <div>
            <img src={ApiImg4} alt="api-content-img" />
          </div>
          <div>
            <h3>Use CurrikiStudio to build and publish interactive courses</h3>
            <p>
              CurrikiStudio is designed to help organizations transform
              curriculum into what drives learner engagement. With a wide
              library of diverse activity types and the ability to completely
              customize the brand experience and publishing destinations,
              CurrikiStudio is the best all-in-one solution for building the
              next generation of learning experiences.
            </p>
            <a href="wwww.curriki.org" target="_blank">
              See documentation
            </a>
          </div>
        </div>
      </div>

      {/* bussines product */}
      <div className="bussiness-product-section">
        <div className="container">
          <div>
            <h2>Products for developers and businesses</h2>
            <p>
              Take a closer look at the products we offer for developers and
              businesses
            </p>
          </div>
          <div className="bussiness-card-content">
            <div className="bussiness-card">
              <img src={Achitect} alt="development bussiness" />
              <h2>ARCHITECTURE</h2>
              <p>
                What Is CurrikiStudio? How Does it Work? How is Content Created
                and Managed? How is Data Persisted?
              </p>
              <div className="bussiness-card-footer">
                <a href="www.curriki.org">Learn More</a>
                <img src={Arrow} alt="learn- more"></img>
              </div>
            </div>

            <div className="bussiness-card">
              <img src={Schema} alt="development bussiness" />
              <h2>DATABASE SCHEME </h2>
              <p>
                What is Curriki’s Major Schemas? Sub schemas: Authoring Flow,
                Teams, Projects, Playlists, Activities, H5P.
              </p>
              <div className="bussiness-card-footer">
                <a href="www.curriki.org">Learn More</a>
                <img src={Arrow} alt="learn- more"></img>
              </div>
            </div>
            <div className="bussiness-card">
              <img src={DeployImg} alt="development bussiness" />
              <h2>DEPLOYMENT</h2>
              <p>
                What is CurrikiStudio’s Topology? How Can I Deploy the Platform?
                Where Can I Deploy the Infrastructure? What is the Recommended
                Sizing?
              </p>
              <div className="bussiness-card-footer">
                <a href="www.curriki.org">Learn More</a>
                <img src={Arrow} alt="learn- more"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
