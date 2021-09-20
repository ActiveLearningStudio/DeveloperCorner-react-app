import React from 'react';
import Headings from 'curriki-design-system/dist/utils/Headings/headings';

function Description() {
 return (
  <>
   <div className="description-contaner">
    <div className="description-text">
     <div className="description-heading">
      <Headings headingType="h2" color="#084892" text="1." />
      <Headings headingType="h2" color="#084892" text=" How does Curriki’s technology work?" />
     </div>
     <Headings
      className="mt-21"
      headingType="h4"
      color="#084892"
      text="An introduction to Curriki’s architecture"
     />
     <Headings
      headingType="body2"
      weight=""
      color="#515151"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales, quam et blandit fermentum, arcu elit lacinia lectus, sit amet lobortis purus lacus scelerisque mauris. Aenean quis sagittis augue. Vivamus euismod pellentesque congue. Donec egestas elementum magna sit amet eleifend. Pellentesque interdum ex sed lobortis malesuada. Etiam lorem felis, tincidunt pellentesque lacus quis, sodales maximus neque. Quisque lacus turpis, sodales in sagittis eget, blandit quis sem. Vivamus consequat dui mauris, ac semper felis hendrerit in. Sed aliquam facilisis tellus, et vehicula nibh lacinia a. Sed ac odio nec enim imperdiet aliquam. Aliquam egestas dolor vel orci consequat, at tempor elit auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris lacinia, odio vitae efficitur semper, eros sem malesuada metus, ac tempor augue lacus at elit. Donec quam eros, elementum id purus id, tempus vulputate quam. Morbi pharetra nisl ac libero sodales bibendum. Pellentesque vestibulum ultricies odio maximus sagittis. "
     />
    </div>
   </div>
  </>
 );
}

export default Description;
