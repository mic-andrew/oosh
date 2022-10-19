


export const Language = () => {
    return (
        <>

            <section className="p-8">
                <h2 className="text-2xl font-bold text-orange-600">Language</h2>
                <p>Show oosh app in this langauge</p>

                <div className='py-8 space-y-6'>

                        <div>
                            <label>Choose your language:</label>
                            <select className="w-full border px-4 py-3 rounded">
                                <option>Spanish</option>
                                <option>Chinse</option>
                                <option>English (US) </option>
                                <option>English (UK)</option>
                                <option>French</option>
                            </select>
                        </div>

                        <div className="">
                            <button className="bg-orange-600 text-white px-4 py-2">Save</button>
                        </div>

                </div>

            </section>


        </>
    )
}