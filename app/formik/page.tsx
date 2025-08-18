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
        validate={(values) => {
          const errors = {} as any;
          if (values.name.trim() == '') { errors.name! = 'REQUIRED' }
          if (values.password.trim() == '') { errors.password! = "REQUIRED" }
          return errors
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values)
          setTimeout(() => {
            setSubmitting(false)
          }, 400);
          resetForm()
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form className='flex flex-col border-4 border-zinc-600 w-fit mx-auto my-16 gap-3 p-10 rounded-xl'>
            <Field type="text" name="name" placeholder="name" />
            {errors.name && touched.name && <span className='text-xs my-0 bg-red-900 text-red-200 p-1 rounded'>{errors.name}</span>}
            <Field type="password" name="password" placeholder="password" />
            {errors.password && touched.password && <span className='text-xs my-0 bg-red-900 text-red-200 p-1 rounded'>{errors.password}</span>}
            <Button variant={'success'} disabled={!!isSubmitting} type="submit" className='!bg-emerald-700'>SEND</Button>
          </Form>
        )}
      </Formik>
    </div >
  );
};

export default FormikPage;
