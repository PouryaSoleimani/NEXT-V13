'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@/components/ui/button';
type ErrorsType = { email: string, name: string }

const FormikPage = () => {
  return (
    <div className='section flex-col bg-black rounded-xl !mt-16 min-h-[80vh]'>
      <Formik
        initialValues={{ name: '', password: '' }}
        onSubmit={(values) => console.info('VALUES ==>', values)}
        validate={(values) => {
          const errors = { name: '', password: '' };
          if (values.name.trim() == '') { errors.name = 'REQUIRED' }
          if (values.password.trim() == '') { errors.password = "REQUIRED" }
          return errors
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form className='flex flex-col border-4 border-zinc-600 w-fit mx-auto my-16 gap-6 p-10 rounded-xl' onSubmit={handleSubmit}>
            <Field type="text" name="name" placeholder="name" />
            {errors.name && <span className='text-red-600'>{errors.name}</span>}
            <Field type="password" name="password" placeholder="password" />
            {errors.password && <span className='text-red-600'>{errors.password}</span>}
            <Button variant={'success'} disabled={!!isSubmitting} type="submit" className='!bg-emerald-700'>SEND</Button>
          </Form>
        )}
      </Formik>
    </div >
  );
};

export default FormikPage;
