import { useState } from "react";
import { Feeds } from "./feed";
import { Activity } from "./activity";
import { ActiveChats } from "./activeChats";


export const Dashboard = () => {


    const [mobileNav, setMobileNav] = useState(false);

    const toggleNav = () => {
        setMobileNav(!mobileNav)
    }




    return (
        <>
            <main>
                <div className="flex relative gap-6 justify-between">
                    <div className="w-full xl:w-1/2" >
                        <Feeds />
                    </div>
                    <div className="hidden xl:flex w-1/2 fixed gap-6 2xl:gap-10 ml-[39%] 2xl:ml-[43%] " >
                        <div className=" w-1/3" >
                            <Activity />
                        </div>
                        <div className="w-1/3">
                            <ActiveChats />
                        </div>
                    </div>
                </div>

            </main>

        </>
    )
}