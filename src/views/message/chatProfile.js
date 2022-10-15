import { useState } from "react";

export const ChatProfile = (props) => {


    let {handleAcc, acc} = props;


  // accordion
  const [expanded, setExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [arrow, setArrow] = useState(false);

  const handleChangeAcc = (panel) => {
    setExpanded(isExpanded ? panel : false);
    setArrow  (isExpanded === panel)
    setIsExpanded(!isExpanded);
  };



    return (
        <>

            <div className={` backdrop-blur-lg w-full overflow-y-scroll md:w-80 xl:w-96 md:h-full bg-white/30 mt-5 min-h-screen  inset-y-0 right-0 top-0 2xl:top-12  shadow-2xl transform fixed transition duration-300 ease-in-out z-40 ${acc ? "translate-x-0" : "translate-x-full"}`}>

                <div className="border-b py-2 bg-white">
                    <div className="items-center flex flex-wrap px-6 justify-between">
                        <h2 className="text-base font-bold">User Profile</h2>
                        <button onClick={handleAcc} className="border rounded px-6 py-2.5 shadow text-orange-600"><i className="text-base fa-solid fa-xmark"></i></button>
                    </div>
                </div>



            </div>

        </>
    )
}