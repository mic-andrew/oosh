import { useState } from "react";
import { Posts } from "./posts";
import { Shorts } from "./shorts";



export const Stories = () => {


    const [active, setActive] = useState("tab1");

    const handleChange = (value) => {
        setActive(value);
    };





    return (
        <>

            <section className='space-y-6'>
                <div className=" flex  border-b border-t py-2 gap-4">

                    <div className="w-1/2 text-center">
                        <button
                            onClick={() => handleChange("tab1")}
                            className={`hover:text-orange-600  ${active === "tab1" ? "text-orange-600 " : "text-black"}`}
                        >
                            <span className=" font-bold  md:text-lg">
                                Posts <i class="fa-solid fa-notes-medical"></i>
                            </span>
                        </button>
                    </div>


                    <div className="w-1/2 text-center" onClick={() => handleChange("tab2")}>
                        <button
                            className={`hover:text-orange-600  ${active === "tab2" ? "text-orange-600 " : "text-black"}`}
                        >
                            <span className=" font-bold  md:text-lg">
                                Shorts
                            </span>
                        </button>
                    </div>
                </div>



                <div>
                    <div hidden={active !== "tab1"}>
                        <Posts />
                    </div>

                    <div hidden={active !== "tab2"}>
                        <Shorts />
                    </div>



                </div>
            </section>

        </>
    )
}