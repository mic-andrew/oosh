import dp from '../../assets/dp.png'





export const Activity = () => {
    return (
        <>

            <section className='shadow shadow-slate-400 rounded-lg space-y-4 pt-2 pb-4'>

                <div className=' border-b pb-2'>
                    <div className='flex justify-between px-4'>
                        <p className='font-medium'>You might </p>
                        <p className='text-sm text-orange-600 font-semibold'>See all</p>
                    </div>
                </div>



                <div className="flex px-4 gap-3 items-center">
                    <div>
                        <img src={dp} alt="img" className='w-8 rounded-full' />
                    </div>

                    <div>
                        <p className='text-sm font-bold'>Emma</p>
                        <p className='text-xs'>CEO of 5star</p>
                    </div>
                </div>

                <div className='flex px-4 gap-6'>
                    <div className=''>
                        <button className='border-orange-600 border px-4 2xl:px-6 py-1.5 text-orange-600 rounded shadow shadow-orange-200 text-sm'>Ignore</button>
                    </div>

                    <div className=''>
                        <button className='bg-orange-600  text-white px-4 2xl:px-6 py-1.5 rounded shadow shadow-orange-200 text-sm'>Connect</button>
                    </div>
                </div>
            </section>

        </>
    )
}