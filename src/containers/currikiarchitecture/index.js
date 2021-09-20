import React from 'react';
import heroImg from '../../assets/images/hero-section.png';
import Headings from 'curriki-design-system/dist/utils/Headings/headings';
import Description from './description';

import './styles.scss';

function index() {
 return (
  <>
   <div
    className="hero-section"
    style={{
     backgroundImage: `url(${heroImg})`,
     backgroundPosition: 'center',
     backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat',
    }}
   >
    <div className="hero-text">
     <Headings headingType="h1" color="#FFB124" text="Curriki’s Architecture/Components" />
    </div>
   </div>
   <div className="text-section">
    <div className="heading-contaner">
     <div className="heading">
      <Headings headingType="body1" color="#767676" text="1." />
      <Headings headingType="body1" color="#767676" text=" How does Curriki’s technology work?" />
     </div>
     <div className="heading">
      <Headings headingType="body1" color="#767676" text="2." />
      <Headings headingType="body1" color="#767676" text=" API" />
     </div>
     <div className="heading">
      <Headings headingType="body1" color="#767676" text="3." />
      <Headings
       headingType="body1"
       color="#767676"
       text="Reference Implementation/User Interface"
      />
     </div>
     <div className="heading">
      <Headings headingType="body1" color="#767676" text="4." />
      <Headings headingType="body1" color="#767676" text=" Search Infrastructure (Elastic Stack)" />
     </div>
     <div className="heading">
      <Headings headingType="body1" color="#767676" text="5." />
      <Headings headingType="body1" color="#767676" text=" Identity Framework" />
     </div>
     <div className="heading">
      <Headings headingType="body1" color="#767676" text="6." />
      <Headings headingType="body1" color="#767676" text="Active Learning Framework (H5P)" />
     </div>
     <div className="heading">
      <Headings headingType="body1" color="#767676" text="7." />
      <Headings
       headingType="body1"
       color="#767676"
       text=" Learning Tools Integration (LTI/Tsugi)"
      />
     </div>
     <div className="heading">
      <Headings headingType="body1" color="#767676" text="8." />
      <Headings headingType="body1" color="#767676" text=" Learning Record Store (xAPI/Trax)" />
     </div>
     <div className="heading">
      <Headings headingType="body1" color="#767676" text="9." />
      <Headings headingType="body1" color="#767676" text=" Multi tenancy" />
     </div>
     <div className="heading">
      <Headings headingType="body1" color="#767676" text="10." />
      <Headings headingType="body1" color="#767676" text=" Security Framework" />
     </div>
     <div className="heading">
      <Headings headingType="body1" color="#767676" text="11." />
      <Headings headingType="body1" color="#767676" text=" Business Intelligence/Data Mining" />
     </div>
    </div>
    <Description />
   </div>
  </>
 );
}

export default index;
