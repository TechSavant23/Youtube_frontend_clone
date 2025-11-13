"use client"

import { useState } from "react"
import { Mic,Bell,Plus, Ellipsis, EllipsisVertical } from 'lucide-react';

export default function SignIn() {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    }
    return (
        <div>
        {isActive ? (
            <button onClick={toggleActive} className='flex justify-center w-27 border border-[#252525] hover:bg-[#272727] hover:border-[#272727] rounded-full h-10 text-white bg-transparent gap-2 cursor-pointer'>
                <img src="profile.png" className='w-7 h-7 my-auto' style={{filter: 'invert(1)'}}/>
                <div className='mt-2'>Sign in</div>
            </button> 
        ) : (
            <div className="flex justify-between gap-3">
                <button className="justify-items-center hover:bg-[#424242] bg-[#252525] w-10 h-10 rounded-full">
                    <Mic />
                </button>
                <button className="flex justify-around px-2.5 pt-2 gap-1.5 w-25 h-10 hover:bg-[#424242] bg-[#252525] rounded-l-full rounded-r-full">
                    <Plus />
                    <div>
                        Create
                    </div>
                </button>
                <button className="hover:bg-[#424242] w-10 h-10 justify-items-center rounded-full">
                    <Bell />
                </button>
                <button onClick={toggleActive} className='flex justify-center w-20 border border-[#252525] hover:bg-[#272727] hover:border-[#272727] rounded-full h-10 text-white bg-transparent gap-2 cursor-pointer'>
                    <div className='mt-2'>Sign Out</div>
                </button> 
            </div>
        )}
            
        </div>
    )
}