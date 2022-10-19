import { ErrorMessage, Field, Form, Formik } from 'formik'



export const Security = () => {
    return (
        <>

            <section className="p-8">
                <h2 className="text-2xl font-bold text-orange-600">Where You’re Logged In</h2>

                <div className='py-8 space-y-8'>

                    <div className="md:grid md:grid-cols-2 2xl:grid-cols-3 gap-6 space-y-4 md:space-y-0">

                        <div className=" shadow shadow-slate-400 rounded-lg py-4  px-4 md:px-6 2xl:px-8">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <i class="fa-solid fa-desktop text-2xl"></i>
                                </div>
                                <div>
                                    <h2 className="font-bold">Window PC - Ikeja, Lagos</h2>
                                    <p className="font-bold text-sm ">Chrome - <span className="text-green-400 ml-4">Active Now</span></p>
                                </div>
                            </div>
                        </div>


                        <div className="shadow shadow-slate-400 rounded-lg py-4  px-4 md:px-6 2xl:px-8">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <i class="fa-solid fa-laptop text-2xl"></i>
                                </div>
                                <div>
                                    <h2 className="font-bold">Window Laptop - Lekki, Lagos</h2>
                                    <p className="font-bold text-sm ">Chrome - <span className="text-slate-400  ml-3">2days ago</span></p>
                                </div>
                            </div>
                        </div>


                        <div className="shadow shadow-slate-400 rounded-lg py-4  px-4 md:px-6 2xl:px-8">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <i class="fa-solid fa-mobile-screen-button text-2xl"></i>
                                </div>
                                <div>
                                    <h2 className="font-bold">Iphone 6s  - Ikeja, Lagos</h2>
                                    <p className="font-bold text-sm ">Oohs app - <span className="text-slate-400  ml-4">20 minutes ago</span></p>
                                </div>
                            </div>
                        </div>


                        <div className="shadow shadow-slate-400 rounded-lg py-4  px-4 md:px-6 2xl:px-8">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <i class="fa-solid fa-desktop text-2xl"></i>
                                </div>
                                <div>
                                    <h2 className="font-bold">Window PC - VI, Lagos</h2>
                                    <p className="font-bold text-sm ">Oohs app - <span className="text-slate-400  ml-3">2 minutes ago </span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-bold text-xl text-orange-600">Change Password</h2>

                        <div className='py-5'>
                        <Formik>
                        <Form>
                            <div className=' mb-4 lg:mb-0 space-y-4 md:space-y-4 lg:py-1.5'>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="">Current Password</span>
                                        <Field
                                            type="text"
                                            name="firstname"
                                            className="w-full border px-4 py-3 rounded"
                                            placeholder="Evans Kelly"
                                        />
                                        <ErrorMessage name="firstname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="">New Password</span>
                                        <Field
                                            type="text"
                                            name="lastname"
                                            className="w-full border px-4 py-3 rounded"
                                            placeholder="lilmow"
                                        />
                                        <ErrorMessage name="lastname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>


                            </div>

                            <div className='mb-4  space-y-4 md:space-y-4 lg:py-1.5'>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="">Re-type New Password</span>
                                        <Field
                                            type="email"
                                            name="email"
                                            className="w-full border px-4 py-3 rounded"
                                            placeholder="www.lilmow.com"
                                        />
                                        <ErrorMessage name="email" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                    <p className='text-right font-medium text-blue-700'>Forgot Password?</p>
                                </div>
                            </div>

                            <button className='bg-orange-600 w-full md:w-1/2 text-center py-3 text-white rounded-xl'>Save</button>
                        </Form>
                    </Formik>
                        </div>
                    </div>

                </div>




            </section>

        </>
    )
}


//how to build a carousel
