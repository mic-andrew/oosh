import React from 'react'
import logo from '../assets/logo.png'
import { Formik, Form, Field, ErrorMessage } from "formik";   //to make use of formik to handle the form creation for the posts
import * as Yup from 'yup';
import { Link } from 'react-router-dom';



export const ForgotPassword = () => {

    //creating  intialvalues for formik
    const intialValues = {
        email: "",
    }


    //validationSchema--- to integrate validations on the form using Yup
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
    })



    const onSubmit = (data, { resetForm }) => {
        setTimeout(async () => {
            let details = data;
            if (details.cpassword !== details.password) {
                let res = {
                    altType: "danger",
                    altMsg: "Password doesn't Match"
                }
                console.log(res)
            }

        }, 2000)
    }



    return (
        <>
            <main>
                <div className='bg-white py-12'>
                    <div className='w-full lg:w-5/6 2xl:w-1/2 lg:mx-auto lg:p-12'>
                        <img src={logo} className="w-20 mx-auto" alt='img' />
                        <div className='my-6 px-4'>
                            <h2 className='text-4xl font-bold text-center'>Forget password?</h2>
                            <p className='text-lg font-medium text-center'>Enter your details to receive a rest link</p>
                        </div>

                        <div className='border-2 border-slate-200 mx-2 rounded-xl shadow-lg py-14 px-8 lg:p-14space-y-5'>
                            <div>
                                <Formik initialValues={intialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                                    <Form>
                                        <div className='space-y-5'>
                                            <div>
                                                <label className="block text-sm">
                                                    <Field
                                                        type="email"
                                                        name="email"
                                                        className="block w-full mt-1 border p-3  text-base font-medium focus:border-slate-700 focus:outline-none focus:shadow-outline-purple shadow shadow-slate-100 rounded-md"
                                                        placeholder="Enter Email"
                                                    />
                                                    <ErrorMessage name="email" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                </label>
                                            </div>

                                            <div className='space-y-3'>
                                                <button className='bg-orange-600 w-full rounded-md text-white py-3 px-8 space-x-4 text-lg font-medium shadow-md shadow-orange-200'> Send </button>
                                                <p className='text-center font-bold'> <Link to="/login" className='text-orange-600'><i class="fa-solid fa-arrow-left-long mr-3"></i> Back to sign in</Link></p>
                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}