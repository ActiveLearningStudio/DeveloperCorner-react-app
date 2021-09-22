import React from 'react';
import Headings from 'curriki-design-system/dist/utils/Headings/headings';
import Heading from './heading';
import Description from './description';
import Scrollspy from 'react-scrollspy';
import Banner from '../../components/banner';
import './styles.scss';

function index() {
 return (
  <>
   <Banner className="hero-section">
    <div className="hero-text">
     <Headings headingType="h1" color="#FFB124" text="Curriki’s Architecture/Components" />
    </div>
   </Banner>
   <div className="text-section">
    <Heading Scrollspy={Scrollspy} />
    <Description />
   </div>
  </>
 );
}

export default index;
