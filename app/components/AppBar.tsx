import React, { useState } from 'react';
import { Search, Menu } from 'lucide-react';
import SearchBar from './SearchBar';
import SignIn from './SignIn';
import Sidebar from './Sidebar';

export default function AppBar() {
    return (
        <div className='flex justify-between px-4 pt-3 bg-transparent'>
            <div className='flex'>
                <button className='justify-items-center hover:bg-[#434343] rounded-full w-11 h-11 cursor-pointer'><Menu className='my-auto' /></button>
                <img src={"youtube.svg"} alt="YouTube" className='h-10 w-30 cursor-pointer' />
            </div>
            <div className='flex'>
                <SearchBar />
                <button className="bg-[#252525] h-10 w-16 rounded-r-full px-4 cursor-pointer"><Search /></button>
            </div>
            <SignIn />
        </div>
    )
}