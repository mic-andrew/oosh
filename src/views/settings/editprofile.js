import { ErrorMessage, Field, Form, Formik } from 'formik'
import cvdp from '../../assets/dpcv.png'




export const EditProfile = () => {

    return (
        <>
            <section className="p-8">
                <h2 className="text-2xl font-bold text-orange-600">Edit Profile</h2>


                <div className='py-8'>
                    <img src={cvdp} className="w-28" alt='image' />
                </div>

                <div>
                    <Formik>
                        <Form>
                            <div className='md:flex md:space-x-6 mb-4 lg:mb-0 space-y-4 md:space-y-0 justify-between lg:py-1.5'>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="">Full Name</span>
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
                                        <span className="">Email</span>
                                        <Field
                                            type="email"
                                            name="email"
                                            className="w-full border px-4 py-3 rounded"
                                            placeholder="www.lilmow.com"
                                        />
                                        <ErrorMessage name="email" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="">Birthday</span>
                                        <Field
                                            type="date"
                                            name="lastname"
                                            className="w-full border px-4 py-3 rounded"
                                            placeholder="24/04/2005"
                                        />
                                        <ErrorMessage name="birthday" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>


                            </div>

                            <div className='md:flex md:space-x-6 mb-4 lg:mb-0 space-y-4 md:space-y-0 justify-between lg:py-1.5'>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="">Phone Number</span>
                                        <Field
                                            type="number"
                                            name="phone"
                                            className="w-full border px-4 py-3 rounded"
                                            placeholder="+234 - (0)803787778974"
                                        />
                                        <ErrorMessage name="firstname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="">Occupation</span>
                                        <Field
                                            type="text"
                                            name="occupation"
                                            className="w-full border px-4 py-3 rounded"
                                            placeholder="UI/UX Designer"
                                        />
                                        <ErrorMessage name="bio" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>


                            </div>

                            <div className='md:flex md:space-x-6 mb-4 lg:mb-0 space-y-4 md:space-y-0 justify-between lg:py-1.5'>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="">Gender</span>
                                        <Field
                                            as="select"
                                            type="text"
                                            name="gender"
                                            className="block w-full mt-1 border p-3  text-base font-medium focus:border-slate-700 focus:outline-none focus:shadow-outline-purple shadow shadow-slate-100 rounded-md">
                                            <option selected >Select gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </Field>
                                        <ErrorMessage name="gender" component="span" className="text-red-500 text-right" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="">Website</span>
                                        <Field
                                            type="text"
                                            name="lastname"
                                            className="w-full border px-4 py-3 rounded"
                                            placeholder="wwww.lilwom.com"
                                        />
                                        <ErrorMessage name="lastname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>
                            </div>

                            <div className='md:flex md:space-x-6 mb-4 lg:mb-0 space-y-4 md:space-y-0 justify-between lg:py-1.5'>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="">Education</span>
                                        <Field
                                            type="text"
                                            name="phone"
                                            className="w-full border px-4 py-3 rounded"
                                            placeholder="Bachelor of Science"
                                        />
                                        <ErrorMessage name="firstname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="">Zip Code</span>
                                        <Field
                                            type="number"
                                            name="zipcode"
                                            className="w-full border px-4 py-3 rounded"
                                            placeholder="231108"
                                        />
                                        <ErrorMessage name="bio" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>


                            </div>

                            <div className='md:flex md:space-x-6 mb-4 lg:mb-0 space-y-4 md:space-y-0 justify-between lg:py-1.5'>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="">City</span>
                                        <Field
                                            type="text"
                                            name="phone"
                                            className="w-full border px-4 py-3 rounded"
                                            placeholder="Victoria Island (VI)"
                                        />
                                        <ErrorMessage name="firstname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="">State</span>
                                        <Field
                                            type="text"
                                            name="occupation"
                                            className="w-full border px-4 py-3 rounded"
                                            placeholder="Lagos"
                                        />
                                        <ErrorMessage name="bio" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>


                            </div>


                            <div className='md:flex md:space-x-6 mb-4 lg:mb-0 space-y-4 md:space-y-0 justify-between lg:py-1.5'>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="">Address</span>
                                        <Field
                                            type="text"
                                            name="phone"
                                            className="w-full border px-4 py-3 rounded"
                                            placeholder="19 Adetokunbo Ademola Street"
                                        />
                                        <ErrorMessage name="firstname" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                    </label>
                                </div>

                                <div className='w-full md:w-1/2'>
                                    <label className="block text-sm">
                                        <span className="">Hobby</span>
                                        <Field
                                            type="text"
                                            name="occupation"
                                            className="w-full border px-4 py-3 rounded"
                                            placeholder="Dancing"
                                        />
                                        <ErrorMessage name="bio" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
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
                </div>
            </section>
        </>
    )
}