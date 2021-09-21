import React from 'react';
import Headings from 'curriki-design-system/dist/utils/Headings/headings';
import Buttons from 'curriki-design-system/dist/utils/Buttons/buttons';
import { Formik, Field } from 'formik';
const Login = () => {
 return (
  <>
   <div className="login-section">
    <div className="login-buttons">
     <Buttons className="yellow-btn" text="Login" />
     <Buttons className="white-btn" disabled text="Register" />
    </div>
    <div className="login-forum">
     <Formik
      initialValues={{ email: '', password: '', toggle: false, checked: [] }}
      validate={(values) => {
       const errors = {};
       if (!values.email) {
        errors.email = 'Required';
       } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
       } else if (!values.password) {
        errors.password = 'Required';
       } else if (!values.checked) {
        errors.checked = 'Required';
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
        <Headings className="" color="#515151" headingType="body3" text="Username" />
        <input
         type="email"
         name="email"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.email}
        />
        {errors.email && touched.email && errors.email}
        <Headings className="" color="#515151" headingType="body3" text="Password" />
        <input
         type="password"
         name="password"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.password}
        />
        {errors.password && touched.password && errors.password}
        <label>
         <Field type="checkbox" onChange={handleChange} name="checked" value={values.checked} />
         {values.checked}
        </label>
        {errors.checked && touched.checked && errors.checked}
        <Buttons primary type="submit" text="Login" width="143px" />
        {/* <button type="submit" disabled={isSubmitting}>
             Submit
           </button> */}
       </form>
      )}
     </Formik>
    </div>
   </div>
  </>
 );
};

export default Login;
