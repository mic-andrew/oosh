import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Formik, Form, Field, ErrorMessage } from "formik";   //to make use of formik to handle the form creation for the posts
import * as Yup from 'yup';
import { Link } from 'react-router-dom';


import image from '../assets/ex5.png'


export const Login = () => {

    //creating  intialvalues for formik
    const intialValues = {
        email: "",
        password: "",
    }


    //validationSchema--- to integrate validations on the form using Yup
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(4).max(20).required("Enter password"),
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



    const [mode, setMode] = useState('original')
    const changeMode = (value) => {
        setMode(value)
    }



    return (
        <>
            <main>
                <div className='bg-white py-12'>
                    <div className='w-full lg:w-5/6 2xl:w-1/2 lg:mx-auto lg:p-12'>
                        <img src={logo} className="w-20 mx-auto" alt='img' />
                        <div className='my-6 px-4'>
                            <h2 className='text-4xl font-bold text-center'>Sign In</h2>
                            <p className='text-lg font-medium text-center'>Welcome back, you have missed!</p>
                        </div>

                        <div className='border-2 border-slate-200  rounded-xl shadow-lg py-14 px-8 lg:p-14 space-y-5 mx-2'>
                            <div className='flex flex-col md:flex-row gap-4 lg:gap-10 justify-center'>
                                <div className='w-full md:w-1/2'>
                                    <button className='bg-orange-600 w-full rounded-md text-white py-3 px-8 space-x-4 shadow-md shadow-orange-100'> <i class="fa-brands fa-google"></i> <span>  Continue With Google</span></button>
                                </div>

                                <div className='w-full md:w-1/2'>
                                    <button className='bg-black w-full rounded-md text-white py-3 px-8 space-x-4 '> <i class="fa-brands fa-apple"></i> <span>Continue With Apple</span></button>
                                </div>
                            </div>

                            <div className='flex justify-center items-center gap-6'>
                                <div className='bg-slate-300 h-0.5 w-1/2 '></div>
                                <p className='font-bold'>OR</p>
                                <div className='bg-slate-300 h-0.5 w-1/2'></div>
                            </div>




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

                                            <div className='relative'>
                                                <div className='absolute lg:right-6 right-4 mt-4'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                                        <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                                        <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                                <label className="block text-sm">
                                                    <Field
                                                        type="password"
                                                        name="password"
                                                        className="block w-full mt-1 border p-3  text-base font-medium focus:border-slate-700 focus:outline-none focus:shadow-outline-purple shadow shadow-slate-100 rounded-md"
                                                        placeholder="Password"
                                                    />
                                                    <ErrorMessage name="password" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                </label>
                                            </div>

                                            <div className='flex justify-between items-center'>
                                                <div className='font-medium text-lg '>
                                                    <Field type="checkbox" name="toggle" className="mr-2.5" />
                                                    Remember me
                                                </div>
                                                <div className='font-bold text-blue-700'>
                                                    <Link to="/forgot-password">  Forgot Password? </Link></div>
                                            </div>



                                            <div className='space-y-3'>
                                                <button className='bg-orange-600 w-full rounded-md text-white py-3 px-8 space-x-4 text-lg font-medium shadow-md shadow-orange-200'> Sign Up</button>
                                                <p className='text-center font-bold'> Don't have an account? <Link to="/" className='text-orange-600'>Sign Up</Link></p>
                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* <div className='space-x-4'>
                <button onClick={() => changeMode('multiply')}>Multiply</button>
                <button onClick={() => changeMode('color-dodge')}>color-dodge</button>
                <button onClick={() => changeMode('darken')}>darken</button>
                <button onClick={() => changeMode('overlay')}>Overlay</button>
            </div>

            <div className='bg-yellow-300'>
                <img src={image} alt="img" className={`object-cover w-full mix-blend-${mode}`} />
            </div> */}
        </>
    )
}