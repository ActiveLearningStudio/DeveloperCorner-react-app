import React from 'react';
import Headings from 'curriki-design-system/dist/utils/Headings/headings';
import Banner from '../../components/banner';
import General from './general';
import Archives from './archives';
import './styles.scss';

const Index = () => {
 return (
  <>
   <Banner className="hero-section">
    <div className="hero-text">
     <Headings headingType="h1" color="#FFB124" text="General Discussion" />
    </div>
   </Banner>
   <div className="General-Discussion-container">
    <General />
    <Archives />
   </div>
  </>
 );
};

export default Index;
