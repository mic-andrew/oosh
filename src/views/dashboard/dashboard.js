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

                <div className="flex lg:gap-6 mt-16">
                    <div className="w-full xl:w-2/4 h-screen">
                        <Feeds />
                    </div>

                    <div className="xl:w-1/4 hidden xl:block">
                        <div className="sticky  h-screen">
                            <Activity />
                        </div>
                    </div>

                    <div className="xl:w-1/4  hidden xl:block">
                        <div className="top-0 sticky h-screen">
                            <ActiveChats />
                        </div>
                    </div>
                </div>

            </main>



        </>
    )
}