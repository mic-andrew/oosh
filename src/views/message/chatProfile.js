import { useState } from "react";

export const ChatProfile = () => {


    const [drop, setDrop] = useState("");

    const handledrop = (e) => {
      if (drop === "") {
        setDrop(e)
      }else{
          setDrop("")
      }
    };




    return (
        <>

            <div className="absolute top-0 w-full xl:w-1/4  flex flex-wrap xl:block space-y-8 mx-auto">

            </div>

        </>
    )
}