import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';



export const CheckEmail = () => {

    return (
        <>
            <main >
                <div className='bg-white py-12 '>
                    <div className='w-1/2 mx-auto p-12 space-y-10'>
                        <img src={logo} className="w-20 mx-auto" alt='img' />
                        <div className='border-2 border-slate-200  rounded-xl shadow-lg p-14 space-y-5'>
                            <div>
                                <div className='my-6'>
                                    <h2 className='text-4xl font-bold text-center'>Check your email</h2>
                                    <p className='text-lg font-medium text-center'>We’ve have sent a link to your email address: <span className="text-blue-700">lilmow10@gmail.com</span> </p>
                                </div>

                                <div className='space-y-3'>
                                    <Link to="/login">
                                        <button className='bg-orange-700 w-full rounded-md text-white py-3 px-8 space-x-4 text-lg font-medium shadow-md shadow-orange-200'>Skip now </button>
                                    </Link>
                                    <p className='text-center font-bold'>Didn’t  receive an email?<Link to="/" className='text-orange-500 mx-4'>Resend</Link></p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}