import React from 'react';
import Headings from 'curriki-design-system/dist/utils/Headings/headings';

function Heading({ Scrollspy }) {
 return (
  <>
   <div className="heading-contaner">
    <Scrollspy
     items={[
      'headings12',
      'headings1',
      'headings2',
      'headings3',
      'headings4',
      'headings5',
      'headings6',
      'headings7',
      'headings8',
      'headings9',
      'headings10',
     ]}
     style={{ padding: 0 }}
     currentClassName="is-current"
    >
     <a href="#headings12">
      <div className="heading">
       <Headings headingType="body2" color="#767676" text="1." />
       <Headings
        className="h-text"
        headingType="body2"
        color="#767676"
        text=" How does Curriki’s technology work?"
       />
      </div>
     </a>
     <a href="#headings1">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="2." />
       <Headings className="h-text" headingType="body2" color="#767676" text=" API" />
      </div>
     </a>
     <a href="#headings2">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="3." />
       <Headings
        className="h-text"
        headingType="body2"
        color="#767676"
        text="Reference Implementation/User Interface"
       />
      </div>
     </a>
     <a href="#headings3">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="4." />
       <Headings
        className="h-text"
        headingType="body2"
        color="#767676"
        text=" Search Infrastructure (Elastic Stack)"
       />
      </div>
     </a>
     <a href="#headings4">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="5." />
       <Headings
        className="h-text"
        headingType="body2"
        color="#767676"
        text=" Identity Framework"
       />
      </div>
     </a>
     <a href="#headings5">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="6." />
       <Headings
        className="h-text"
        headingType="body2"
        color="#767676"
        text="Active Learning Framework (H5P)"
       />
      </div>
     </a>
     <a href="#headings6">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="7." />
       <Headings
        className="h-text"
        headingType="body2"
        color="#767676"
        text=" Learning Tools Integration (LTI/Tsugi)"
       />
      </div>
     </a>
     <a href="#headings7">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="8." />
       <Headings
        className="h-text"
        headingType="body2"
        color="#767676"
        text=" Learning Record Store (xAPI/Trax)"
       />
      </div>
     </a>
     <a href="#headings8">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="9." />
       <Headings className="h-text" headingType="body2" color="#767676" text=" Multi tenancy" />
      </div>
     </a>
     <a href="#headings9">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="10." />
       <Headings
        className="h-text"
        headingType="body2"
        color="#767676"
        text=" Security Framework"
       />
      </div>
     </a>
     <a href="#headings10">
      <div className="heading">
       <Headings className="text" headingType="body2" color="#767676" text="11." />
       <Headings
        className="h-text"
        headingType="body2"
        color="#767676"
        text=" Business Intelligence/Data Mining"
       />
      </div>
     </a>
    </Scrollspy>
   </div>
  </>
 );
}

export default Heading;
