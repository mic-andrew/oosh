import { Link } from 'react-router-dom'
import ex1 from '../../assets/ex1.png'
import ex2 from '../../assets/ex2.png'
import ex3 from '../../assets/ex3.png'
import ex4 from '../../assets/ex4.png'
import ex5 from '../../assets/ex5.png'
import ex6 from '../../assets/ex6.png'


export const Explore = () => {
    return (
        <>

            <section className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-5">
                <div className="shadow shadow-slate-400 rounded-xl">
                    <div> <img src={ex1} className="w-full object-cover rounded-t-xl" /> </div>
                    <div className='p-4'>

                        <div className='flex gap-3 text-sm items-center pb-3'>
                            <p className='text-orange-600 bg-orange-100 px-4 py-1 rounded-lg font-bold'>Technology</p>
                            <p>Friday 26 March</p>
                        </div>

                        <div className='space-y-3'>
                            <h2 className='font-semibold text-xl'>How to create a sample car for school project</h2>
                            <p className='text-sm'>Add zest to the car with a nose and a tail. For the nose, take a piece of poster board and roll it into a cone. Insert this in the front of the ...</p>
                            <Link to="/dashboard/technology">
                                <button className='bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-black'>Read More <i class="fa-solid fa-arrow-right-long ml-2"></i></button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="shadow shadow-slate-400 rounded-xl">
                    <div> <img src={ex2} className="w-full object-cover rounded-t-xl" /> </div>
                    <div className='p-4'>

                        <div className='flex gap-3 text-sm items-center pb-3'>
                            <p className='text-orange-600 bg-orange-100 px-4 py-1 rounded-lg font-bold'>Articles</p>
                            <p>Friday 26 March</p>
                        </div>

                        <div className='space-y-3'>
                            <h2 className='font-semibold text-xl'>How to create a sample car for school project</h2>
                            <p className='text-sm'>Add zest to the car with a nose and a tail. For the nose, take a piece of poster board and roll it into a cone. Insert this in the front of the ...</p>
                            <button className='bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-black'>Read More <i class="fa-solid fa-arrow-right-long ml-2"></i></button>
                        </div>
                    </div>
                </div>


                <div className="shadow shadow-slate-400 rounded-xl">
                    <div> <img src={ex3} className="w-full object-cover rounded-t-xl" /> </div>
                    <div className='p-4'>

                        <div className='flex gap-3 text-sm items-center pb-3'>
                            <p className='text-orange-600 bg-orange-100 px-4 py-1 rounded-lg font-bold'>Sport</p>
                            <p>Friday 26 March</p>
                        </div>

                        <div className='space-y-3'>
                            <h2 className='font-semibold text-xl'>How to create a sample car for school project</h2>
                            <p className='text-sm'>Add zest to the car with a nose and a tail. For the nose, take a piece of poster board and roll it into a cone. Insert this in the front of the ...</p>
                            <button className='bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-black'>Read More <i class="fa-solid fa-arrow-right-long ml-2"></i></button>
                        </div>
                    </div>
                </div>


                <div className="shadow shadow-slate-400 rounded-xl">
                    <div> <img src={ex4} className="w-full object-cover rounded-t-xl" /> </div>
                    <div className='p-4'>

                        <div className='flex gap-3 text-sm items-center pb-3'>
                            <p className='text-orange-600 bg-orange-100 px-4 py-1 rounded-lg font-bold'>Business</p>
                            <p>Friday 26 March</p>
                        </div>

                        <div className='space-y-3'>
                            <h2 className='font-semibold text-xl'>How to create a sample car for school project</h2>
                            <p className='text-sm'>Add zest to the car with a nose and a tail. For the nose, take a piece of poster board and roll it into a cone. Insert this in the front of the ...</p>
                            <button className='bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-black'>Read More <i class="fa-solid fa-arrow-right-long ml-2"></i></button>
                        </div>
                    </div>
                </div>


                <div className="shadow shadow-slate-400 rounded-xl">
                    <div> <img src={ex5} className="w-full object-cover rounded-t-xl" /> </div>
                    <div className='p-4'>

                        <div className='flex gap-3 text-sm items-center pb-3'>
                            <p className='text-orange-600 bg-orange-100 px-4 py-1 rounded-lg font-bold'>Health</p>
                            <p>Friday 26 March</p>
                        </div>

                        <div className='space-y-3'>
                            <h2 className='font-semibold text-xl'>How to create a sample car for school project</h2>
                            <p className='text-sm'>Add zest to the car with a nose and a tail. For the nose, take a piece of poster board and roll it into a cone. Insert this in the front of the ...</p>
                            <button className='bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-black'>Read More <i class="fa-solid fa-arrow-right-long ml-2"></i></button>
                        </div>
                    </div>
                </div>


                <div className="shadow shadow-slate-400 rounded-xl">
                    <div> <img src={ex6} className="w-full object-cover rounded-t-xl" /> </div>
                    <div className='p-4'>

                        <div className='flex gap-3 text-sm items-center pb-3'>
                            <p className='text-orange-600 bg-orange-100 px-4 py-1 rounded-lg font-bold'>Entertainments</p>
                            <p>Friday 26 March</p>
                        </div>

                        <div className='space-y-3'>
                            <h2 className='font-semibold text-xl'>How to create a sample car for school project</h2>
                            <p className='text-sm'>Add zest to the car with a nose and a tail. For the nose, take a piece of poster board and roll it into a cone. Insert this in the front of the ...</p>
                            <button className='bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-black'>Read More <i class="fa-solid fa-arrow-right-long ml-2"></i></button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}