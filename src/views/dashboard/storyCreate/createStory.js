



export const CreateStory = () => {
    return (
        <>

            <div className="flex justify-between">
                <div className="text-3xl font-bold">Your Story</div>
                <div><i class="fa-solid fa-gear text-4xl"></i></div>
            </div>

            <div className="md:flex justify-center gap-12 h-screen">
                <div className="md:w-1/2 xl:w-1/4 h-[60%] py-auto rounded-xl bg-orange-600">
                    <div className="w-full text-center mt-[50%] space-y-3">
                        <i class="fa-solid fa-notes-medical bg-white py-6 px-7 text-xl mx-auto text-blue-700 rounded-full m-auto"></i>
                        <p className="text-xl text-white font-semibold">Create a Photo Story</p>
                    </div>
                </div>
                <div className="md:w-1/2 xl:w-1/4 h-[60%] rounded-xl bg-blue-700">
                    <div className="w-full text-center mt-[50%] space-y-3">
                        <i class="fa-solid fa-font bg-white py-6 px-7 text-xl mx-auto text-blue-700 rounded-full m-auto"></i>
                        <p className="text-xl text-white font-semibold">Create a Text Story</p>
                    </div>
                </div>
            </div>

        </>
    )
}