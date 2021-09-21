import React from 'react';
import Headings from 'curriki-design-system/dist/utils/Headings/headings';

const Heading = ({ Scrollspy }) => {
 return (
  <>
   <div className="heading-contaner">
    <Scrollspy
     items={['headings1', 'headings2', 'headings3', 'headings4']}
     style={{ padding: 0 }}
     currentClassName="is-current"
    >
     <a href="#headings1">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="1." />
       <Headings className="h-text" headingType="body2" color="#767676" text=" Core platform" />
      </div>
     </a>
     <a href="#headings2">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="2." />
       <Headings className="h-text" headingType="body2" color="#767676" text="LTI Integration" />
      </div>
     </a>
     <a href="#headings3">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="3." />
       <Headings
        className="h-text"
        headingType="body2"
        color="#767676"
        text=" Learning Record Store"
       />
      </div>
     </a>
     <a href="#headings4">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="4." />
       <Headings className="h-text" headingType="body2" color="#767676" text=" Core B.I. ETLs" />
      </div>
     </a>
    </Scrollspy>
   </div>
  </>
 );
};

export default Heading;
