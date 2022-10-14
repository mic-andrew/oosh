import React from 'react'

import pp4 from '../../assets/4.png'
import pp5 from '../../assets/5.png'
import pp6 from '../../assets/6.png'
import { ActiveChats } from './activeChats'
import { Activity } from './activity'





export const Notification = () => {
    return (
        <>


            <main>
                <div className="flex relative gap-6 justify-between">
                    <div className="w-full xl:w-1/2" >
                        <section className='shadow shadow-slate-400 rounded-lg'>
                            <div className='flex justify-between items-center border-b py-4  px-4 md:px-6 2xl:px-8 '>
                                <p className='text-lg font-bold'>Notification</p>
                                <div><i class="fa-solid fa-gear"></i></div>
                            </div>

                            <div className='py-4  px-4 md:px-6 2xl:px-8 border-b'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-3'>
                                        <div className=''><img src={pp4} alt="image" className='w-10' /></div>
                                        <div className='hidden md:inline-flex text-orange-600 bg-orange-300 rounded-full'><i className="fa-solid fa-message p-2 "></i></div>

                                        <div>
                                            <p className='text-sm md:text-base font-bold'>IBK Dev Commented on your photo. </p>
                                            <p className='text-xs'>2 minutes ago</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='text-xs'><i class="fa-solid fa-circle text-orange-600"></i></p>
                                    </div>
                                </div>
                            </div>

                            <div className='py-4  px-4 md:px-6 2xl:px-8 border-b'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-3'>
                                        <div className=''><img src={pp5} alt="image" className='w-10' /></div>
                                        <div className='hidden md:inline-flex text-orange-600 bg-orange-300 rounded-full'><i class="fa-solid fa-heart p-2"></i></div>

                                        <div>
                                            <p className='text-sm md:text-base font-bold'>Emma lu like your post .   </p>
                                            <p className='text-xs'>2 minutes ago</p>
                                        </div>
                                    </div>

                                    <div className='hidden'>
                                        <p className='text-xs'><i class="fa-solid fa-circle text-orange-600"></i></p>
                                    </div>
                                </div>
                            </div>


                            <div className='py-4  px-4 md:px-6 2xl:px-8 border-b'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-3'>
                                        <div className=''><img src={pp4} alt="image" className='w-10' /></div>
                                        <div className='hidden md:inline-flex text-orange-600 bg-orange-300 rounded-full'><i class="fa-solid fa-share p-2"></i></div>

                                        <div>
                                            <p className='text-sm md:text-base font-bold'>Ayo share your post.</p>
                                            <p className='text-xs'>2 minutes ago</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='text-xs'><i class="fa-solid fa-circle text-orange-600"></i></p>
                                    </div>
                                </div>
                            </div>


                            <div className='py-4  px-4 md:px-6 2xl:px-8 border-b'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-3'>
                                        <div className=''><img src={pp4} alt="image" className='w-10' /></div>
                                        <div className='hidden md:inline-flex text-orange-600 bg-orange-300 rounded-full'><i class="fa-solid fa-share p-2"></i></div>

                                        <div>
                                            <p className='text-sm md:text-base font-bold'>Ayo share your post.</p>
                                            <p className='text-xs'>2 minutes ago</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='text-xs'><i class="fa-solid fa-circle text-orange-600"></i></p>
                                    </div>
                                </div>
                            </div>

                            <div className='py-4  px-4 md:px-6 2xl:px-8 border-b'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-3'>
                                        <div className=''><img src={pp4} alt="image" className='w-10' /></div>
                                        <div className='hidden md:inline-flex text-orange-600 bg-orange-300 rounded-full'><i className="fa-solid fa-message p-2 "></i></div>

                                        <div>
                                            <p className='text-sm md:text-base font-bold'>IBK Dev Commented on your photo. </p>
                                            <p className='text-xs'>2 minutes ago</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='text-xs'><i class="fa-solid fa-circle text-orange-600"></i></p>
                                    </div>
                                </div>
                            </div>

                            <div className='py-4  px-4 md:px-6 2xl:px-8 border-b'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-3'>
                                        <div className=''><img src={pp6} alt="image" className='w-10' /></div>
                                        <div className='hidden md:inline-flex text-orange-600 bg-orange-300 rounded-full'><i class="fa-solid fa-heart p-2"></i></div>

                                        <div>
                                            <p className='text-sm md:text-base font-bold'>Robert James followed you.   </p>
                                            <p className='text-xs'>2 minutes ago</p>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <button className='text-xs font-medium px-3 py-2 rounded shadow-md shadow-orange-300 text-white bg-orange-600'>Unfollow</button>
                                    </div>
                                </div>
                            </div>


                            <div className='py-4  px-4 md:px-6 2xl:px-8 border-b'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-3'>
                                        <div className=''><img src={pp4} alt="image" className='w-10' /></div>
                                        <div className='hidden md:inline-flex text-orange-600 bg-orange-300 rounded-full'><i className="fa-solid fa-message p-2 "></i></div>

                                        <div>
                                            <p className='text-sm md:text-base font-bold'>Robert James followed you. </p>
                                            <p className='text-xs'>2 minutes ago</p>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <button className='text-xs font-medium px-3 py-2 rounded shadow-md shadow-orange-300 text-orange-600 border border-orange-600'>Follow</button>
                                    </div>
                                </div>
                            </div>

                            <div className='py-4  px-4 md:px-6 2xl:px-8 border-b'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-3'>
                                        <div className=''><img src={pp5} alt="image" className='w-10' /></div>
                                        <div className='hidden md:inline-flex text-orange-600 bg-orange-300 rounded-full'><i class="fa-solid fa-heart p-2"></i></div>

                                        <div>
                                            <p className='text-sm md:text-base font-bold'>Emma lu like your post .   </p>
                                            <p className='text-xs'>2 minutes ago</p>
                                        </div>
                                    </div>

                                    <div className='hidden'>
                                        <p className='text-xs'><i class="fa-solid fa-circle text-orange-600"></i></p>
                                    </div>
                                </div>
                            </div>


                            <div className='py-4  px-4 md:px-6 2xl:px-8 border-b'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-3'>
                                        <div className=''><img src={pp4} alt="image" className='w-10' /></div>
                                        <div className='hidden md:inline-flex text-orange-600 bg-orange-300 rounded-full'><i class="fa-solid fa-image p-2"></i></div>

                                        <div>
                                            <p className='text-sm md:text-base font-bold'>Grace liked  Added a new photo.  </p>
                                            <p className='text-xs'>2 minutes ago</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='text-xs'><i class="fa-solid fa-circle text-orange-600"></i></p>
                                    </div>
                                </div>
                            </div>


                            <div className='py-4  px-4 md:px-6 2xl:px-8 border-b'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-3'>
                                        <div className=''><img src={pp4} alt="image" className='w-10' /></div>
                                        <div className='hidden md:inline-flex text-orange-600 bg-orange-300 rounded-full'><i class="fa-solid fa-share p-2"></i></div>

                                        <div>
                                            <p className='text-sm md:text-base font-bold'>Ayo share your post.</p>
                                            <p className='text-xs'>2 minutes ago</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='text-xs'><i class="fa-solid fa-circle text-orange-600"></i></p>
                                    </div>
                                </div>
                            </div>

                            <div className='py-4  px-4 md:px-6 2xl:px-8 border-b'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-3'>
                                        <div className=''><img src={pp4} alt="image" className='w-10' /></div>
                                        <div className='hidden md:inline-flex text-orange-600 bg-orange-300 rounded-full'><i className="fa-solid fa-message p-2 "></i></div>

                                        <div>
                                            <p className='text-sm md:text-base font-bold'>IBK Dev Commented on your photo. </p>
                                            <p className='text-xs'>2 minutes ago</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='text-xs'><i class="fa-solid fa-circle text-orange-600"></i></p>
                                    </div>
                                </div>
                            </div>

                            <div className='py-4  px-4 md:px-6 2xl:px-8 border-b'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-3'>
                                        <div className=''><img src={pp6} alt="image" className='w-10' /></div>
                                        <div className='hidden md:inline-flex text-orange-600 bg-orange-300 rounded-full'><i class="fa-solid fa-heart p-2"></i></div>

                                        <div>
                                            <p className='text-sm md:text-base font-bold'>Robert James followed you.   </p>
                                            <p className='text-xs'>2 minutes ago</p>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <button className='text-xs font-medium px-3 py-2 rounded shadow-md shadow-orange-300 text-white bg-orange-600'>Unfollow</button>
                                    </div>
                                </div>
                            </div>


                            <div className='py-4  px-4 md:px-6 2xl:px-8 border-b'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-3'>
                                        <div className=''><img src={pp4} alt="image" className='w-10' /></div>
                                        <div className='hidden md:inline-flex text-orange-600 bg-orange-300 rounded-full'><i className="fa-solid fa-message p-2 "></i></div>

                                        <div>
                                            <p className='text-sm md:text-base font-bold'>IBK Dev Commented on your photo. </p>
                                            <p className='text-xs'>2 minutes ago</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='text-xs'><i class="fa-solid fa-circle text-orange-600"></i></p>
                                    </div>
                                </div>
                            </div>

                            <div className='py-4  px-4 md:px-6 2xl:px-8 border-b'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center space-x-3'>
                                        <div className=''><img src={pp6} alt="image" className='w-10' /></div>
                                        <div className='hidden md:inline-flex text-orange-600 bg-orange-300 rounded-full'><i class="fa-solid fa-image p-2"></i></div>

                                        <div>
                                            <p className='text-sm md:text-base font-bold'>Grace liked  Added a new photo.  </p>
                                            <p className='text-xs'>2 minutes ago</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className='text-xs'><i class="fa-solid fa-circle text-orange-600"></i></p>
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                    <div className="hidden xl:flex w-1/2 fixed gap-6 2xl:gap-10 ml-[39%] 2xl:ml-[43%] " >
                        <div className=" w-1/3" >
                            <Activity />
                        </div>
                        <div className="w-1/3">
                            <ActiveChats />
                        </div>
                    </div>
                </div>

            </main>


        </>
    )
}