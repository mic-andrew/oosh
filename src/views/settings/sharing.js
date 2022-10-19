




export const Sharing = () => {
    return (
        <>

            <section className="p-8">
                <h2 className="text-2xl font-bold text-orange-600">Viewing & Sharing</h2>


                <div className='py-8 space-y-6'>

                    <div>
                        <p className="font-bold mb-3">Who can see your post?</p>
                        <div className="space-y-2">
                            <div className="space-x-5">
                                <input type="radio" />
                                <lable>Everyone</lable>
                            </div>

                            <div className="space-x-5">
                                <input type="radio" />
                                <lable>Followers</lable>
                            </div>

                            <div className="space-x-5">
                                <input type="radio" />
                                <lable>Only me</lable>
                            </div>
                        </div>
                    </div>


                    <div>
                        <p className="font-bold mb-3">Who can see your profile?</p>
                        <div className="space-y-2">
                            <div className="space-x-5">
                                <input type="radio" />
                                <lable>Everyone</lable>
                            </div>

                            <div className="space-x-5">
                                <input type="radio" />
                                <lable>Followers</lable>
                            </div>

                            <div className="space-x-5">
                                <input type="radio" />
                                <lable>Only me</lable>
                            </div>
                        </div>
                    </div>


                    <div>
                        <p className="font-bold mb-3">Allow others to share your posts to their Timeline?</p>
                        <div className="space-y-2">
                            <div className="space-x-5">
                                <input type="radio" />
                                <lable>On</lable>
                            </div>

                            <div className="space-x-5">
                                <input type="radio" />
                                <lable>Off</lable>
                            </div>
                        </div>
                    </div> 


                    <div>
                        <p className="font-bold mb-3">Anyone can follow you?</p>
                        <div className="space-y-2">
                            <div className="space-x-5">
                                <input type="radio" />
                                <lable>On</lable>
                            </div>

                            <div className="space-x-5">
                                <input type="radio" />
                                <lable>Off</lable>
                            </div>
                        </div>
                    </div> 



                </div>


            </section>



        </>
    )
}