import { Home, Menu } from "lucide-react"
import { useState } from "react"
import YoutubeShorts from "./YoutubeShorts"

export default function Sidebar() {
    const Contents = [{
        logo: <Home />,
        title: "Home"
    }, {
        logo:<img src={"youtube_shorts.png"} className="w-7 h-7" />,
        title: "Shorts"
    },
    
    ]
    
    return (
        <div className="w-60 p-2 h-screen bg-[#0F0F0F]">
            <header className='flex gap-2'>
                <button className=' mt-0.5 justify-items-center hover:bg-[#434343] rounded-full w-11 h-11 cursor-pointer'><Menu className='my-auto' /></button>
                <img src={"youtube.svg"} alt="YouTube" className='mt-1 h-10 w-30 cursor-pointer scale-110' />
            </header>
            <section className="grid p-2">
                {Contents.map(content => <div className="grid grid-cols-12 p-2">
                        <div className="col-span-5">{content.logo}</div>
                        <div className="col-span-7 mt-0.5">{content.title}</div>
                </div>)

                }
            </section>
        </div>
    )
}