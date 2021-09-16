import React from 'react'
import Achitect from "../../assets/images/c1.svg";
import Schema from "../../assets/images/c2.svg";
import DeployImg from "../../assets/images/c3.svg";
import Arrow from "../../assets/images/Arrow.svg";
const BusinessProduct = () => {
    return (
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
    )
}

export default BusinessProduct
