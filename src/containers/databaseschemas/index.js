import React from 'react';
import Headings from 'curriki-design-system/dist/utils/Headings/headings';
import Banner from '../../components/banner';
import HeadingPage from './heading';
import Description from './description';
import Scrollspy from 'react-scrollspy';
import './style.scss';

const Index = () => {
 return (
  <>
   <Banner className="hero-section">
    <div className="hero-text">
     <Headings headingType="h1" color="#FFB124" text="Database Schemas" />
    </div>
   </Banner>
   <div className="text-section">
    <HeadingPage Scrollspy={Scrollspy} />
    <Description />
   </div>
  </>
 );
};

export default Index;
