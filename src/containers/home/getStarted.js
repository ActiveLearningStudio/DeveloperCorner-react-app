import React from 'react';
import StartedImg from '../../assets/images/Trynow1.svg';
import Buttons from 'curriki-design-system/dist/utils/Buttons/buttons';
const GetStarted = () => {
 return (
  <div className="developer-get-started">
   <div className="container">
    <div className="get-started-content">
     <div className="get-started">
      <h3>Get started right now!</h3>
      <p>
       Create a developer account, get your credentials, and set up sandbox accounts for testing.
       We'll guide you thorugh the steps to become a Curriki developer.
      </p>
      {/* <button> GET STARTED</button> */}
      <Buttons
       text="GET STARTED"
       height="45px"
       width="199px"
       secondary={true}
       className="get-started-btn"
      />
     </div>
     <img className="get-start-img" src={StartedImg} alt="starter image" />
    </div>
   </div>
  </div>
 );
};

export default GetStarted;
