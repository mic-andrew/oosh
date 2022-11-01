import img1 from '../../../assets/post5.png'
import img2 from '../../../assets/post4.png'
import img3 from '../../../assets/post3.png'
import img4 from '../../../assets/post2.png'
import img5 from '../../../assets/post1.png'
import { Link } from 'react-router-dom'




export const Posts = () => {
    return (<>

        <div className="flex gap-3 overflow-x-scroll py-2">

            <div className='w-48  2xl:w-1/4 flex-none rounded-xl shadow shadow-slate-400'>
                <Link to="create-story">
                    <img src={img1} className="w-full object-cover h-52 rounded-t-xl" alt='img' />
                    <div className='text-center -mt-4'>
                        <p className='text-center'><i className="fa-solid fa-circle-plus text-4xl text-blue-600 "></i></p>
                        <p className='text-lg font-semibold'>Create Story</p>
                    </div>
                </Link>
            </div>

            <div className='w-48  2xl:w-1/4 relative flex-none justify-center text-center rounded-xl shadow shadow-slate-400'>
                <img src={img2} className="w-full object-cover rounded-xl" alt='img' />
                <div className='absolute bottom-3 w-full mx-auto text-white '>
                    <p className='font-bold'>lilmow</p>
                    <p className='text-xs'>1 min ago</p>
                </div>
            </div>


            <div className='w-48  2xl:w-1/4 relative flex-none justify-center text-center rounded-xl shadow shadow-slate-400'>
                <img src={img3} className="w-full object-cover rounded-xl" alt='img' />
                <div className='absolute bottom-3 w-full mx-auto text-white '>
                    <p className='font-bold'>Ayo Dev</p>
                    <p className='text-xs'>1 min ago</p>
                </div>
            </div>


            <div className='w-48  2xl:w-1/4 relative flex-none justify-center text-center rounded-xl shadow shadow-slate-400'>
                <img src={img4} className="w-full object-cover rounded-xl" alt='img' />
                <div className='absolute bottom-3 w-full mx-auto text-white '>
                    <p className='font-bold'>evans</p>
                    <p className='text-xs'>1 min ago</p>
                </div>
            </div>


            <div className='w-48  2xl:w-1/4 relative flex-none justify-center text-center rounded-xl shadow shadow-slate-400'>
                <img src={img5} className="w-full object-cover rounded-xl" alt='img' />
                <div className='absolute bottom-3 w-full mx-auto text-white '>
                    <p className='font-bold'>David</p>
                    <p className='text-xs'>1 min ago</p>
                </div>
            </div>


            <div className='w-48  2xl:w-1/4 relative flex-none justify-center text-center rounded-xl shadow shadow-slate-400'>
                <img src={img2} className="w-full object-cover rounded-xl" alt='img' />
                <div className='absolute bottom-3 w-full mx-auto text-white '>
                    <p className='font-bold'>Emmanuel</p>
                    <p className='text-xs'>1 min ago</p>
                </div>
            </div>


        </div>

    </>)
}