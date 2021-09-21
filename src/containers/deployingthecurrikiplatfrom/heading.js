import React from 'react';
import Headings from 'curriki-design-system/dist/utils/Headings/headings';

const Heading = ({ Scrollspy }) => {
 return (
  <>
   <div className="heading-contaner">
    <Scrollspy
     items={[
      'headings1',
      'headings2',
      'headings3',
      'headings4',
      'headings5',
      'headings6',
      'headings7',
      'headings8',
      'headings9',
     ]}
     style={{ padding: 0 }}
     currentClassName="is-current"
    >
     <a href="#headings1">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="1." />
       <Headings className="h-text" headingType="body2" color="#767676" text=" Docker/Terraform" />
      </div>
     </a>
     <a href="#headings2">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="2." />
       <Headings className="h-text" headingType="body2" color="#767676" text="AWS" />
      </div>
     </a>
     <a href="#headings3">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="3." />
       <Headings className="h-text" headingType="body2" color="#767676" text=" Oracle Cloud" />
      </div>
     </a>
     <a href="#headings4">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="4." />
       <Headings className="h-text" headingType="body2" color="#767676" text=" Azure" />
      </div>
     </a>
     <a href="#headings5">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="5." />
       <Headings className="h-text" headingType="body2" color="#767676" text=" Linode" />
      </div>
     </a>
     <a href="#headings6">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="6." />
       <Headings className="h-text" headingType="body2" color="#767676" text="Red Hat OpenShift" />
      </div>
     </a>
     <a href="#headings7">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="7." />
       <Headings
        className="h-text"
        headingType="body2"
        color="#767676"
        text="Other cloud environments"
       />
      </div>
     </a>
     <a href="#headings8">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="8." />
       <Headings
        className="h-text"
        headingType="body2"
        color="#767676"
        text="On premise deployments"
       />
      </div>
     </a>
     <a href="#headings9">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="9." />
       <Headings
        className="h-text"
        headingType="body2"
        color="#767676"
        text="Noovo MAP (Satellite distribution)"
       />
      </div>
     </a>
    </Scrollspy>
   </div>
  </>
 );
};

export default Heading;
