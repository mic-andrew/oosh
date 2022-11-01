import pics from "../../assets/dp.png"


export const ActivityLog = () => {
    return (
        <>

            <section className="p-8">
                <h2 className="text-2xl font-bold text-orange-600">Activity Log</h2>

                <div className='py-8 space-y-6'>
                    <div className="flex gap-6">
                        <div>
                            <label>Date:</label>
                            <input type="date" className="w-full border px-4 py-3 rounded" />
                        </div>

                        <div>
                            <label>Activity:</label>
                            <select className="w-full border px-4 py-3 rounded">
                                <option>All</option>
                                <option>Today</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                                <option>Last Year</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div>
                            <img src={pics} className="rounded-full w-12"/>
                        </div>
                        <div>
                            <p className="font-bold">You searched for "Ereve"</p>
                            <p className="text-sm">Only me</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div>
                            <img src={pics} className="rounded-full w-12"/>
                        </div>
                        <div>
                            <p className="font-bold">You searched for "Ereve"</p>
                            <p className="text-sm">Only me</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div>
                            <img src={pics} className="rounded-full w-12"/>
                        </div>
                        <div>
                            <p className="font-bold">You Reacted on emmalu’s post</p>
                            <p className="text-sm">Public</p>
                        </div>
                    </div>


                    <div className="flex items-center gap-5">
                        <div>
                            <img src={pics} className="rounded-full w-12"/>
                        </div>
                        <div>
                            <p className="font-bold">You searched for "Ereve"</p>
                            <p className="text-sm">Public</p>
                        </div>
                    </div>


                    <div className="flex items-center gap-5">
                        <div>
                            <img src={pics} className="rounded-full w-12"/>
                        </div>
                        <div>
                            <p className="font-bold">You searched for "Ereve"</p>
                            <p className="text-sm">Only me</p>
                        </div>
                    </div>


                    <div className="flex items-center gap-5">
                        <div>
                            <img src={pics} className="rounded-full w-12"/>
                        </div>
                        <div>
                            <p className="font-bold">You commented on Ayo’s post</p>
                            <p className="text-sm">Public</p>
                        </div>
                    </div>


                    <div className="flex items-center gap-5">
                        <div>
                            <img src={pics} className="rounded-full w-12"/>
                        </div>
                        <div>
                            <p className="font-bold">You commented on Ayo’s post</p>
                            <p className="text-sm">Public</p>
                        </div>
                    </div>


                    <div className="flex items-center gap-5">
                        <div>
                            <img src={pics} className="rounded-full w-12"/>
                        </div>
                        <div>
                            <p className="font-bold">You searched for "Ereve"</p>
                            <p className="text-sm">Only me</p>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}