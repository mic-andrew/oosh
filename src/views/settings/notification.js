import { useState } from "react"
import ReactSwitch from "react-switch"



export const Notification = () => {


    const [notif, setNotf] = useState(false)


    const toggleNotification = (value) => {
        if (notif === value) {
            setNotf(false)
        } else {
            setNotf(value)
        }
    }


    return (
        <>

            <section className="p-8">
                <h2 className="text-2xl font-bold text-orange-600">Notification</h2>

                <div className='py-8 space-y-6'>

                    <div>
                        <p className="font-bold mb-3">What notifications you receive?</p>
                        <div className="space-y-2">
                            <div className="flex justify-between w-full  md:w-1/2 2xl:w-1/4       ">
                                <div className="flex gap-3 items-center">
                                    <div className="bg-orange-200 rounded-full py-2 px-3"><i className="fa-solid fa-heart text-orange-600"></i></div>
                                    <div><p className="font-bold">Like</p></div>
                                </div>
                                <div><ReactSwitch onChange={() => toggleNotification("like")} checked={notif === "like"} /></div>
                            </div>


                            <div className="flex justify-between w-full  md:w-1/2 2xl:w-1/4   ">
                                <div className="flex gap-3 items-center">
                                    <div className="bg-orange-200 rounded-full py-2 px-3"><i class="fa-solid fa-comment-dots text-orange-600"></i></div>
                                    <div><p className="font-bold">Comment</p></div>
                                </div>
                                <div><ReactSwitch onChange={() => toggleNotification("comment")} checked={notif === "comment"} /></div>
                            </div>


                            <div className="flex justify-between w-full  md:w-1/2 2xl:w-1/4   ">
                                <div className="flex gap-3 items-center">
                                    <div className="bg-orange-200 rounded-full py-2 px-3"><i class="fa-solid fa-circle-user text-orange-600"></i></div>
                                    <div><p className="font-bold">Mention</p></div>
                                </div>
                                <div><ReactSwitch onChange={() => toggleNotification("mention")} checked={notif === "mention"} /></div>
                            </div>


                            <div className="flex justify-between w-full  md:w-1/2 2xl:w-1/4   ">
                                <div className="flex gap-3 items-center">
                                    <div className="bg-orange-200 rounded-full py-2 px-3"><i class="fa-solid fa-pager text-orange-600"></i></div>
                                    <div><p className="font-bold">Post</p></div>
                                </div>
                                <div><ReactSwitch onChange={() => toggleNotification("post")} checked={notif === "post"} /></div>
                            </div>


                            <div className="flex justify-between w-full  md:w-1/2 2xl:w-1/4   ">
                                <div className="flex gap-3 items-center">
                                    <div className="bg-orange-200 rounded-full py-2 px-3"><i class="fa-solid fa-share text-orange-600"></i></div>
                                    <div><p className="font-bold">Share</p></div>
                                </div>
                                <div><ReactSwitch onChange={() => toggleNotification("share")} checked={notif === "share"} /></div>
                            </div>


                            <div className="flex justify-between w-full  md:w-1/2 2xl:w-1/4   ">
                                <div className="flex gap-3 items-center">
                                    <div className="bg-orange-200 rounded-full py-2 px-3"><i class="fa-solid fa-user-check text-orange-600"></i></div>
                                    <div><p className="font-bold">Follow</p></div>
                                </div>
                                <div><ReactSwitch onChange={() => toggleNotification("follow")} checked={notif === "follow"} /></div>
                            </div>


                            <div className="flex justify-between w-full  md:w-1/2 2xl:w-1/4   ">
                                <div className="flex gap-3 items-center">
                                    <div className="bg-orange-200 rounded-full py-2 px-3"><i class="fa-solid fa-calendar-days text-orange-600"></i></div>
                                    <div><p className="font-bold">Event</p></div>
                                </div>
                                <div><ReactSwitch onChange={() => toggleNotification("event")} checked={notif === "event"} /></div>
                            </div>


                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}