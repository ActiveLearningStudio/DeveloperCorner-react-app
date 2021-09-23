import React from 'react';
import Headings from 'curriki-design-system/dist/utils/Headings/headings';
import Buttons from 'curriki-design-system/dist/utils/Buttons/buttons';
import Arrow from '../../assets/images/R-arrow.svg';
import Table from 'react-bootstrap/Table';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Forums = () => {
 return (
  <>
   <div className="forum-section">
    <div className="forum-header">
     <div className="forum-nav">
      <Headings className="h-link" color="#515151" headingType="body3" text="Home" />
      <img src={Arrow} alt="arrow" />
      <Headings className="h-link" color="#515151" headingType="body3" text="Forums" />
     </div>
     <div className="forum-search">
      <input className="form-input" type="search" placeholder="Search" />
      <Buttons className="search-btn" icon={faSearch} primary />
     </div>
    </div>
    <div className="forum-table">
     <Table className="table" size="xl">
      <thead>
       <tr>
        <th>
         <Headings headingType="h5" color="#515151" text="Forum" />
        </th>
        <th>
         <Headings headingType="h5" color="#515151" text="Topics" />
        </th>
        <th>
         <Headings headingType="h5" color="#515151" text="Posts" />
        </th>
        <th>
         <Headings headingType="h5" color="#515151" text="Last post" />
        </th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>
         <Headings headingType="body2" color="#084892" text="General Discussion" />
        </td>
        <td>
         <Headings headingType="body2" color="#084892" text="1" />
        </td>
        <td>
         <Headings headingType="body2" color="#084892" text="1" />
        </td>
        <td>
         <Headings headingType="body2" color="#084892" text="2 weeks, 1 day ago" />
        </td>
       </tr>
       <tr>
        <td>
         <Headings headingType="body2" color="#084892" text="General Discussion" />
        </td>
        <td>
         <Headings headingType="body2" color="#084892" text="1" />
        </td>
        <td>
         <Headings headingType="body2" color="#084892" text="1" />
        </td>
        <td>
         <Headings headingType="body2" color="#084892" text="2 weeks, 1 day ago" />
        </td>
       </tr>
       <tr>
        <td>
         <Headings headingType="body2" color="#084892" text="General Discussion" />
        </td>
        <td>
         <Headings headingType="body2" color="#084892" text="1" />
        </td>
        <td>
         <Headings headingType="body2" color="#084892" text="1" />
        </td>
        <td>
         <Headings headingType="body2" color="#084892" text="2 weeks, 1 day ago" />
        </td>
       </tr>
      </tbody>
     </Table>
    </div>
   </div>
  </>
 );
};

export default Forums;
