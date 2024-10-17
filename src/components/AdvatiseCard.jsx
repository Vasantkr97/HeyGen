import { ArrowRight,X } from "lucide-react"
import { useState } from "react";

const AdvatiseCard = () => {
    const [isopen, setIsopen] = useState(true);

    const onClickHandler = () => {
        setIsopen(false)
    }

    if (!isopen) {
        return null;
    }

  return (
    <div className='relative flex flex-row text-white 
     bg-primary items-center justify-center gap-6 p-3 md:p-2 
     rounded-md text-base md:text-sm'>
        <h2 className='font-normal antialiased leading-tight '>Catch our recap of HubSpot INBOUND</h2>
        <a 
            className='flex gap-2 text-white '
            href="#"> 
            <p className="underline hover:no-underline">Read More</p>
            <ArrowRight />
        </a>
        <div className="absolute inset-y-0 right-0 left-auto flex items-center w-12 justify-center cursor-pointer">
            <button onClick={onClickHandler}><X/></button>
        </div>
    </div>
  )
}

export default AdvatiseCard