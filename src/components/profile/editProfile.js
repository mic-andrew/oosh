import { Formik, Form, Field, ErrorMessage } from 'formik';
import cv2 from '../../assets/cv1.jpg'
import cvdp from '../../assets/dpcv.png'




export const EditProfile = (props) => {

    let { showEditProfile } = props;

    return (
        <>

            <div className="absolute top-0 left-0 " >
                <div className="inset-0 fixed bg-slate-800 w-screen h-screen z-50 bg-opacity-60 flex items-center px-3">
                    <div className="shadow shadow-slate-400 rounded-lg space-y-4 overflow-y-scroll h-[90%] bg-white mx-auto w-full lg:w-2/3 2xl:w-1/2 ">
                        <section className='space-y-6 p-4'>

                            <div className=' border-b pb-2'>
                                <div className='flex justify-between px-4'>
                                    <p className='font-bold text-lg'>Edit Basic Info </p>
                                    <div>
                                        <button onClick={showEditProfile} className="text-orange-600 text-lg 2xl:text-2xl"><i class="fa-solid fa-circle-xmark"></i></button>
                                    </div>
                                </div>
                            </div>


                            <section className="shadow shadow-slate-400 rounded-2xl relative pb-6">
                                <div>
                                    <img src={cv2} alt="image" className='rounded-tl-2xl rounded-tr-2xl h-56 object-cover w-full' />
                                </div>

                                <div className='-mt-20 px-5 md:pr-20 md:pl-10'>
                                    <div className='flex justify-between items-start'>
                                        <div>
                                            <img src={cvdp} alt="image" className='w-32 md:w-36' />
                                        </div>
                                        {/* 
                                        <div>
                                            <button onClick={showUploadCoverPhoto} className='text-xs md:text-sm font-medium bg-slate-100 px-5 md:px-6 py-3 rounded-lg shadow-lg'><i class="fa-solid fa-cloud-arrow-up mr-2"></i> Edit Cover Photo</button>
                                        </div> */}
                                    </div>
                                </div>
                            </section>

                            <section className='px-6 py-4'>
                                <Formik>
                                    <Form>
                                        <div className='md:flex md:space-x-6 mb-4 lg:mb-0 space-y-4 md:space-y-0 justify-between lg:py-1.5'>

                                            <div className='w-full md:w-1/2'>
                                                <label className="block text-sm">
                                                    <span className="">Name</span>
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
                                                    <span className="">Username</span>
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

                                        <div className='md:flex md:space-x-6 mb-4 lg:mb-0 space-y-4 md:space-y-0 justify-between lg:py-1.5'>

                                            <div className='w-full md:w-1/2'>
                                                <label className="block text-sm">
                                                    <span className="">Website</span>
                                                    <Field
                                                        type="text"
                                                        name="firstname"
                                                        className="w-full border px-4 py-3 rounded"
                                                        placeholder="www.lilmow.com"
                                                    />
                                                    <ErrorMessage name="firstname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                </label>
                                            </div>

                                            <div className='w-full md:w-1/2'>
                                                <label className="block text-sm">
                                                    <span className="">Location</span>
                                                    <Field
                                                        type="text"
                                                        name="lastname"
                                                        className="w-full border px-4 py-3 rounded"
                                                        placeholder="VI, Lagos"
                                                    />
                                                    <ErrorMessage name="lastname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                </label>
                                            </div>


                                        </div>

                                        <div className='md:flex md:space-x-6 mb-4 lg:mb-0 space-y-4 md:space-y-0 justify-between lg:py-1.5'>

                                            <div className='w-full md:w-1/2'>
                                                <label className="block text-sm">
                                                    <span className="">Email</span>
                                                    <Field
                                                        type="text"
                                                        name="firstname"
                                                        className="w-full border px-4 py-3 rounded"
                                                        placeholder="lilmow.hub@gmail.com"
                                                    />
                                                    <ErrorMessage name="firstname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                </label>
                                            </div>

                                            <div className='w-full md:w-1/2'>
                                                <label className="block text-sm">
                                                    <span className="">Phone Number</span>
                                                    <Field
                                                        type="text"
                                                        name="lastname"
                                                        className="w-full border px-4 py-3 rounded"
                                                        placeholder="Doe"
                                                    />
                                                    <ErrorMessage name="lastname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                </label>
                                            </div>


                                        </div>

                                        <div className='md:flex md:space-x-6 mb-4 lg:mb-0 space-y-4 md:space-y-0 justify-between lg:py-1.5'>

                                            <div className='w-full md:w-1/2'>
                                                <label className="block text-sm">
                                                    <span className="">Date of Birth</span>
                                                    <Field
                                                        type="text"
                                                        name="firstname"
                                                        className="w-full border px-4 py-3 rounded"
                                                        placeholder="John"
                                                    />
                                                    <ErrorMessage name="firstname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                </label>
                                            </div>

                                            <div className='w-full md:w-1/2'>
                                                <label className="block text-sm">
                                                    <span className="">Occupation</span>
                                                    <Field
                                                        type="text"
                                                        name="lastname"
                                                        className="w-full border px-4 py-3 rounded"
                                                        placeholder="UI/UX Designer"
                                                    />
                                                    <ErrorMessage name="lastname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                </label>
                                            </div>


                                        </div>

                                        <div className='w-full md:space-x-6 mb-4 lg:mb-0 space-y-4 md:space-y-0 justify-between lg:py-1.5'>
                                            <label className="block text-sm">
                                                <span className="">Bio</span>
                                                <Field
                                                    as="textarea"
                                                    type="text"
                                                    name="lastname"
                                                    className="w-full border px-4 py-3 rounded"
                                                    placeholder="We are openly opened minded. #openlyopenminded"
                                                />
                                                <ErrorMessage name="lastname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                            </label>
                                        </div>

                                        <button className='bg-orange-600 w-full text-center py-3 text-white rounded-xl'>Save</button>
                                    </Form>
                                </Formik>
                            </section>



                        </section>
                    </div>
                </div>
            </div>

        </>
    )
}