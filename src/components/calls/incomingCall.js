import { useState } from 'react';
import dp from '../../assets/dp.png'
import { OngoingCall } from './ongoingCall';



export const IncomingCall = (props) => {


    let { handleMakeCall } = props;

    const [acceptCall, setAcceptCall] = useState(true)


    return (
        <>

            {
                acceptCall ? (
                    <div className="absolute top-0 left-0" >
                        <div className="inset-0 fixed bg-slate-800 w-screen z-50 h-[100vh] bg-opacity-60 flex items-center px-3">

                            <div className="shadow shadow-slate-400 rounded-lg space-y-4 bg-white mx-auto w-full  md:w-2/3 xl:w-1/3">
                                <div className="flex justify-between items-center  2xl:px-8  border-b py-4  px-4 md:px-6">
                                    <div>
                                        <h2 className="text-sm 2xl:text-xl font-bold">Incoming Call</h2>
                                    </div>

                                    <div>
                                        <button onClick={handleMakeCall} className="text-orange-600 text-lg 2xl:text-2xl"><i class="fa-solid fa-circle-xmark"></i></button>
                                    </div>
                                </div>

                                <div className='2xl:px-8  py-10  px-4 md:px-6  space-y-4'>
                                    <div>
                                        <img src={dp} alt="image" className='rounded-full mx-auto' />
                                    </div>

                                    <div className='text-center'>
                                        <p className='text-sm font-medium'>Incoming call from</p>
                                        <h2 className='text-2xl font-bold'>David Adedamola</h2>
                                    </div>

                                    <div className='flex  w-2/3 xl:w-3/5 mx-auto justify-between'>
                                        <div className='space-y-2'>
                                            <div className='bg-red-500 text-white rounded-full w-16 h-16 text-lg shadow-xl flex items-center justify-center'><i class="fa-solid fa-circle-xmark"></i></div>
                                            <p className='text-center'>Reject</p>
                                        </div>

                                        <div className='space-y-2 cursor-pointer' onClick={() => setAcceptCall(!acceptCall)}>
                                            <div className='bg-green-500 text-white rounded-full w-16 h-16 text-lg shadow-xl flex items-center justify-center'><i class="fa-solid fa-phone"></i></div>
                                            <p className='text-center'>Confirm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <OngoingCall handleMakeCall={handleMakeCall}/>
                )
            }






        </>
    )
}