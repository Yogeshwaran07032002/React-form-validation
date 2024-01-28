import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  phoneNumber: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  termsAndConditions: Yup.boolean().oneOf([true], 'You must accept the Terms and Conditions'),
  gender: Yup.string().required('Gender is required'),
  country: Yup.string().required('Country is required'),
  
});

const MyForm = () => {
  return (
    <div className='p4'>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          phoneNumber: '',
          termsAndConditions: false,
          gender: '',
          country: '',
          
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
        
      >
        <Form className='fo'>
          <div className='div1'>
            <label className='n1'>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div className='div2'>
            <label>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className='div3'>
            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div className='div4'>
            <label>Confirm Password</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" className="error" />
          </div>

          <div className='div5'>
            <label>Phone Number</label>
            <Field type="text" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" component="div" className="error" />
          </div>

          <div className='div6'>
            <label>Gender</label>
            <Field as="select" name="gender">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>
            <ErrorMessage name="gender" component="div" className="error" />
          </div>

          <div className='div7'>
            <label>Country</label>
            <div className='radio-group'>
              <label>
                <Field type="radio" name="country" value="India" />
                India
              </label>
              <label>
                <Field type="radio" name="country" value="USA" />
                USA
              </label>
              <label>
                <Field type="radio" name="country" value="UK" />
                UK
              </label>
            </div>
            <ErrorMessage name="country" component="div" className="error" />
          </div>

          <div className='div8'>
            <Field type="checkbox" name="termsAndConditions" /> Accept Terms and Conditions
            <ErrorMessage name="termsAndConditions" component="div" className="error" />
          </div>
         
          <button type="submit" value={'submit' }>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default MyForm;
