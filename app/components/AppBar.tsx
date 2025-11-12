import React from 'react';
import { Search, Menu } from 'lucide-react';

export default function AppBar() {
    return (
        <div className='flex justify-between px-4 pt-3 bg-transparent'>
            <div className='flex'>
                <button className='justify-items-center hover:bg-[#434343] rounded-full w-11 h-11 cursor-pointer'><Menu className='my-auto' /></button>
                <img src={"youtube.svg"} alt="YouTube" className='h-10 w-30 cursor-pointer' />
            </div>
            <div className='flex'>
                <input placeholder="Search" className='lg:w-160 border-[#252525] focus:border-[#1C62B9] px-5 h-10 border-2 rounded-l-full w-120' />
                <button className="bg-[#252525] h-10 w-16 rounded-r-full px-4 cursor-pointer"><Search /></button>
            </div>
            <button className='flex justify-center w-27 border border-[#252525] hover:bg-[#272727] hover:border-[#272727] rounded-full h-10 text-white bg-transparent gap-2 cursor-pointer'>
                <img src="profile.png" className='w-7 h-7 my-auto' style={{filter: 'invert(1)'}}/>
                <div className='mt-2'>Sign in</div>
            </button>
        </div>
    )
}