import { Home, Menu } from "lucide-react"
import { useState } from "react"
import YoutubeShorts from "./YoutubeShorts"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function Sidebar() {
    const Contents = [{
        logo: <Home />,
        title: "Home"
    }, {
        logo:<img src={"youtube_shorts.png"} className="w-7 h-7" />,
        title: "Shorts"
    },{
        logo:<img src={"subcriptions.png"} className="w-7 h-7" />,
        title: "Subscriptions"
    }
    ]

    const You = [
        {
            logo:<img src={''} />,
            title:"History"
        },
        {
            logo:<img src={''} />,
            title:"Playlists"
        },
        {
            logo:<img src={''} />,
            title:"Watch Later"
        },
        {
            logo:<img src={''} />,
            title:"Liked videos"
        },
    ]

    const Subscription = [
        {
            Channellogo:<img src={''} />,
            ChannelName:"History"
        },
        {
            Channellogo:<img src={''} />,
            ChannelName:"History"
        },
        {
            Channellogo:<img src={''} />,
            ChannelName:"History"
        },
    ]

    const Explore = [
        {
            logo:<img src={''} />,
            title: 'Shopping'
        },
        {
            logo:<img src={''} />,
            title: 'Music'
        },
        {
            logo:<img src={''} />,
            title: 'Movies'
        },
        {
            logo:<img src={''} />,
            title: 'Live'
        },
        {
            logo:<img src={''} />,
            title: 'Gaming'
        },
        {
            logo:<img src={''} />,
            title: 'News'
        },
        {
            logo:<img src={''} />,
            title: 'Sports'
        },
        {
            logo:<img src={''} />,
            title: 'Courses'
        },
        {
            logo:<img src={''} />,
            title: 'Fashion & Beauty'
        },
        {
            logo:<img src={''} />,
            title: 'Podcasts'
        },
    ]

    const MoreOnYoutube = [
        {
            logo:<img src={''} />,
            title: 'YouTube Premium'
        },
        {
            logo:<img src={''} />,
            title: 'Youtube Music'
        },
        {
            logo:<img src={''} />,
            title: 'Youtube Kids'
        },
    ]
    
    const More = [
        {
            logo:<img src={''} />,
            title: 'Settings'
        },
        {
            logo:<img src={''} />,
            title: 'Report history'
        },
        {
            logo:<img src={''} />,
            title: 'Help'
        },
        {
            logo:<img src={''} />,
            title: 'Send feedback'
        },
    ]
    
    return (
        <ScrollArea>
            <div className=" sc-hd w-60 p-2 min-h-screen overflow-hidden hover:overflow-y-scroll bg-[#0F0F0F]">
                <header className='flex gap-2'>
                    <button className=' mt-0.5 justify-items-center hover:bg-[#434343] rounded-full w-11 h-11 cursor-pointer'><Menu className='my-auto' /></button>
                    <img src={"youtube.svg"} alt="YouTube" className='mt-1 h-10 w-30 cursor-pointer scale-110' />
                </header>
                <section className="grid p-2">
                    {Contents.map(content => <div className="grid grid-cols-12 p-2">
                            <div className="col-span-3">{content.logo}</div>
                            <div className="col-span-9 mt-0.5">{content.title}</div>
                    </div>)

                    }
                </section>
                <section className="grid p-2">
                    {You.map(you => <div className="grid grid-cols-12 p-2">
                            <div className="col-span-3">{you.logo}</div>
                            <div className="col-span-9 mt-0.5">{you.title}</div>
                    </div>)

                    }
                </section>
                <section className="grid p-2">
                    {Subscription.map(subs => <div className="grid grid-cols-12 p-2">
                            <div className="col-span-3">{subs.Channellogo}</div>
                            <div className="col-span-9 mt-0.5">{subs.ChannelName}</div>
                    </div>)

                    }
                </section>
                <section className="grid p-2">
                    {Explore.map(exp => <div className="grid grid-cols-12 p-2">
                            <div className="col-span-3">{exp.logo}</div>
                            <div className="col-span-9 mt-0.5">{exp.title}</div>
                    </div>)

                    }
                </section>
                <section className="grid p-2">
                    {MoreOnYoutube.map(more => <div className="grid grid-cols-12 p-2">
                            <div className="col-span-3">{more.logo}</div>
                            <div className="col-span-9 mt-0.5">{more.title}</div>
                    </div>)

                    }
                </section>
                <section className="grid p-2">
                    {More.map(m => <div className="grid grid-cols-12 p-2">
                            <div className="col-span-3">{m.logo}</div>
                            <div className="col-span-9 mt-0.5">{m.title}</div>
                    </div>)

                    }
                </section>
                <ScrollBar orientation="horizontal" />
            </div>
        </ScrollArea>
    )
}