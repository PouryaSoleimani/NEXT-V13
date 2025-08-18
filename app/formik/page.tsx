'use client'
import React from 'react';
import { Formik } from 'formik';
type ErrorsType = { email: string, name: string }

const FormikPage = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => { console.info('VALUES ==>', values) }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, /* and other goodies */ }) => (
          <form onSubmit={handleSubmit} className='mx-auto my-32 bg-black p-8 rounded-xl w-fit flex flex-col gap-5'>
            <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} className='px-3 py-1.5 rounded text-2xl' />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className='px-3 py-1.5 rounded text-2xl'
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting} className='btn !bg-teal-600 block !w-full !text-2xl'>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div >
  );
};

export default FormikPage;
