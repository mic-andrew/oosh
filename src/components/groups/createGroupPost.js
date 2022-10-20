import dp from '../../assets/dp.png'



export const CreateGroupPost = (props) => {


    let { showCreateGroupPost } = props;


    return (
        <>

            <div className="absolute top-0 left-0" >
                <div className="inset-0 fixed bg-slate-800 w-screen z-50 h-screen bg-opacity-60 flex items-center px-3">

                    <div className="shadow shadow-slate-400 rounded-lg space-y-4 overflow-y-scroll h-[90%] bg-white mx-auto w-full lg:w-2/3 2xl:w-1/2 ">
                        <div className="flex justify-between items-center  2xl:px-8  border-b py-4  px-4 md:px-6">
                            <div>
                                <h2 className="text-sm 2xl:text-xl font-bold text-center">Create Post</h2>
                            </div>

                            <div>
                                <button onClick={showCreateGroupPost} className="text-orange-600 text-lg 2xl:text-2xl"><i class="fa-solid fa-circle-xmark"></i></button>
                            </div>
                        </div>

                        <div className='2xl:px-8  py-4  px-4 md:px-6 space-y-4'>


                            <div className='flex gap-4'>
                                <div>
                                    <img src={dp} alt="image" className="w-14 rounded-full" />
                                </div>
                                <div>
                                    <h2 className='text-2xl font-bold'>Lilwom</h2>
                                    <p className='font-medium text-sm'><i class="fa-solid fa-earth-africa mr-1"></i> Public group.</p>
                                </div>
                            </div>

                            <div className='mb-3 py-2 border-b text-sm font-medium'>
                                Create Your Post
                            </div>

                            <div className='border rounded-xl p-6'>
                                <h2 className='font-bold text-xl mb-3'>Add a vote</h2>

                                <div className='space-y-2'>
                                    <input type="file" className='w-full border p-2 rounded-lg' placeholder='choose 1' />
                                    <input type="file" className='w-full border p-2 rounded-lg' />
                                    <input type="file" className='w-full border p-2 rounded-lg' />
                                    <input type="file" className='w-full border p-2 rounded-lg' />
                                    <input type="file" className='w-full border p-2 rounded-lg' />
                                </div>
                            </div>

                            <div className='flex-1'>

                                <div className="flex justify-center flex-1 relative">

                                    <div className="absolute bottom-5 right-5 flex items-center pr-2 space-x-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                            <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                                            <path fill-rule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                                        </svg>


                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm9 4.5a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0v-7.5zm1.5 0a.75.75 0 01.75-.75h3a.75.75 0 010 1.5H16.5v2.25H18a.75.75 0 010 1.5h-1.5v3a.75.75 0 01-1.5 0v-7.5zM6.636 9.78c.404-.575.867-.78 1.25-.78s.846.205 1.25.78a.75.75 0 001.228-.863C9.738 8.027 8.853 7.5 7.886 7.5c-.966 0-1.852.527-2.478 1.417-.62.882-.908 2-.908 3.083 0 1.083.288 2.201.909 3.083.625.89 1.51 1.417 2.477 1.417.967 0 1.852-.527 2.478-1.417a.75.75 0 00.136-.431V12a.75.75 0 00-.75-.75h-1.5a.75.75 0 000 1.5H9v1.648c-.37.44-.774.602-1.114.602-.383 0-.846-.205-1.25-.78C6.226 13.638 6 12.837 6 12c0-.837.226-1.638.636-2.22z" clip-rule="evenodd" />
                                        </svg>


                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z" clip-rule="evenodd" />
                                        </svg>

                                    </div>

                                    <textarea rows="6" className="w-full pl-8 py-3 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:focus:shadow-outline-gray  focus:placeholder-gray-500 focus:bg-white focus:border-orange-300 focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Create a post..." />

                                </div>
                            </div>


                            <button className='bg-orange-600 text-white w-full p-3 rounded-lg'>Post</button>





                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}