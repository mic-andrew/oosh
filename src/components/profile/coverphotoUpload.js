import dp from '../../assets/dp.png'




export const CoverPhotoUpload = (props) => {



    let { showUploadCoverPhoto } = props;


    return (
        <>


            <div className="absolute top-0 left-0" >
                <div className="inset-0 fixed bg-slate-800 w-screen z-50 h-[100vh] bg-opacity-60 flex items-center px-3">
                    <div className="shadow shadow-slate-400 rounded-lg space-y-4 bg-white mx-auto w-full lg:w-2/3 2xl:w-1/2 ">
                        <section className='space-y-4 p-4'>

                            <div className=' border-b pb-2'>
                                <div className='flex justify-between px-4'>
                                    <p className='font-bold text-lg'>Edit Photo </p>
                                    <div>
                                        <button onClick={showUploadCoverPhoto} className="text-orange-600 text-lg 2xl:text-2xl"><i class="fa-solid fa-circle-xmark"></i></button>
                                    </div>
                                </div>
                            </div>


                            <div className='bg-slate-300 w-full h-72 rounded-xl'>

                            </div>


                            <div className='flex justify-between items-center'>
                                <div> 0% - 100%</div>
                                <div>
                                    <button onClick={showUploadCoverPhoto} className='bg-orange-600 text-white font-semibold px-8 rounded-lg py-3'>Save</button>
                                </div>
                            </div>



                        </section>
                    </div>
                </div>
            </div>



        </>
    )
}