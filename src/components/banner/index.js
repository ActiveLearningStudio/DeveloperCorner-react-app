import React from 'react';
import heroImg from '../../assets/images/hero-section.png';

const Index = ({ children }) => {
 return (
  <div
   className="hero-section"
   style={{
    backgroundImage: `url(${heroImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
   }}
  >
   {children}
  </div>
 );
};

export default Index;
