import React from 'react';
import Headings from 'curriki-design-system/dist/utils/Headings/headings';
import Banner from '../../components/banner';
import Forums from './forums';
import Login from './login';
import './styles.scss';

const Index = () => {
 return (
  <>
   <Banner className="hero-section">
    <div className="hero-text">
     <Headings headingType="h1" color="#FFB124" text="Curriki forum" />
    </div>
   </Banner>
   <div className="main-container">
    <Forums />
    <Login />
   </div>
  </>
 );
};

export default Index;
