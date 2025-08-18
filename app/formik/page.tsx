'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
          setSubmitting(true)
          console.log(values)
          setTimeout(() => { setSubmitting(false) }, 700);
          resetForm()
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form className='flex flex-col border-4 border-zinc-600 w-fit mx-auto my-16 gap-3 p-10 rounded-xl'>
            <Field type="text" name="name" placeholder="name" />
            <ErrorMessage name='name' component={'span'} className='bg-red-900 text-white p-1 rounded text-[11px]' />
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name='password' component={'span'} className='bg-red-900 text-white p-1 rounded text-[11px]' />
            <Button variant={'success'} disabled={!!isSubmitting} type="submit" onClick={() => console.info(isSubmitting)} className='!bg-emerald-700'>{isSubmitting ? 'LOADING' : 'SEND'}</Button>
          </Form>
        )}
      </Formik>
    </div >
  );
};

export default FormikPage;
