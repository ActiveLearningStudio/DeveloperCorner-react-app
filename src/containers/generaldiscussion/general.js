import React from 'react';
import Headings from 'curriki-design-system/dist/utils/Headings/headings';
import Buttons from 'curriki-design-system/dist/utils/Buttons/buttons';
import Arrow from '../../assets/images/R-arrow.svg';
import UserIcon from '../../assets/images/User.svg';
import Table from 'react-bootstrap/Table';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field } from 'formik';

const General = () => {
 return (
  <>
   <div className="general-section">
    <div className="nav-header">
     <Headings className=" cursor" color="#515151" headingType="link1" text="Home" />
     <img src={Arrow} alt="arrow" />
     <Headings className=" cursor" color="#515151" headingType="link1" text="Forums" />
     <img src={Arrow} alt="arrow" />
     <Headings className=" cursor" color="#515151" headingType="link1" text="General Discussion" />
    </div>
    <div className="update">
     <Headings
      className=""
      color="#515151"
      headingType="body2"
      text="This forum has 1 topic, and was last updated"
     />
     <Headings headingType="body2" color="#084892" text="2 weeks, 1 day ago" />
     <Headings className="" color="#515151" headingType="body2" text="by" />
     <img src={UserIcon} alt="arrow" />
     <Headings headingType="body2" color="#084892" text="Steven" />
    </div>
    <div className="table-blog">
     <div className="table-heading">
      <Headings
       className=""
       color="#515151"
       headingType="body3"
       text="Viewing topic 1 (of 1 total)"
      />
     </div>
     <Table className="table" size="sm">
      <thead>
       <tr>
        <th>
         <Headings headingType="h5" color="#515151" text="Topic" />
        </th>
        <th>
         <Headings headingType="h5" color="#515151" text="Voices" />
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
         <Headings headingType="body2" color="#084892" text="First topic" />
         <div className="started">
          <Headings headingType="body2" color="#515151" text="Started by:" />
          <img src={UserIcon} alt="arrow" />
          <Headings headingType="body2" color="#084892" text="Steven" />
         </div>
        </td>
        <td>
         <Headings headingType="body2" color="#084892" text="1" />
        </td>
        <td>
         <Headings headingType="body2" color="#084892" text="1" />
        </td>
        <td>
         <Headings headingType="body2" color="#084892" text="2 weeks, 1 day ago" />
         <div className="last-post">
          <img src={UserIcon} alt="arrow" />
          <Headings headingType="body2" color="#084892" text="Steven" />
         </div>
        </td>
       </tr>
      </tbody>
     </Table>
    </div>
    <div className="login">
     <Headings
      className=""
      color="#515151"
      headingType="body3"
      text="You must be logged in to create new topics."
     />
     <div className="login-forum">
      <Formik
       initialValues={{ email: '', password: '', toggle: false, checked: [] }}
       validate={(values) => {
        const errors = {};
        if (!values.password) {
         errors.password = 'Required';
        }
        if (!values.email) {
         errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
         errors.email = 'Invalid email address';
        }
        return errors;
       }}
       // onSubmit={(values, { setSubmitting }) => {
       //  setTimeout(() => {
       //   alert(JSON.stringify(values, null, 2));
       //   setSubmitting(false);
       //  }, 400);
       // }}
      >
       {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
       }) => (
        <form onSubmit={handleSubmit}>
         <Headings className="form-name" color="#515151" headingType="body2" text="Username" />
         <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
         />
         {errors.email && touched.email && errors.email}
         <Headings className="form-name" color="#515151" headingType="body2" text="Password" />
         <input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
         />
         {errors.password && touched.password && errors.password}
         <label>
          <Field type="checkbox" className="checked" name="checked" value="Keep me signed in" />
          <Headings className="" color="#515151" headingType="body2" text="Keep me signed in" />
         </label>
         <Buttons primary type="submit" text="Login" width="143px" />
         {/* <button type="submit" disabled={isSubmitting}>
             Submit
           </button> */}
        </form>
       )}
      </Formik>
     </div>
    </div>
   </div>
  </>
 );
};

export default General;
