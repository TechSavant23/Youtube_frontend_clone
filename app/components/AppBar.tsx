import React from 'react';
import { Search } from 'lucide-react';

export default function AppBar() {
    return (
        <div className='flex justify-around pt-3 '>
            <img src={"youtube.png"} alt="YouTube" width={"120"} height={"auto"} />
            <div className='flex'>
                <input placeholder="Search" className='border-[#252525] px-5 h-10 border-2 rounded-l-full w-120' />
                <button className="bg-[#252525] h-10 w-16 rounded-r-full px-4"><Search /></button>
            </div>
            <button className='rounded-full w-20 text-stone-950 bg-white'>
                Sign In
            </button>
        </div>
    )
}