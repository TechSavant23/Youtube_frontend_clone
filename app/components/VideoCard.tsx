export default function VideoCard() {
    return <div className="p-4">
        <img src="/wolverine.jpg" width="600" height='600' className="rounded-2xl">
        </img>
        <div className="grid grid-cols-12">
            <div className="col-span-2 pt-5">
                <img src="playstation.jpg" className="rounded-full w-20 h-20">
                </img>
            </div>
            <div className="col-span-10 pt-5 text-2xl">
                <div>
                    Wolverine GamePlay Trailer
                </div>
                <div className="text-gray-600 text-base">
                    playstation
                </div>
                <div className="text-gray-600 text-base">
                    5M | 1 month ago
                </div>
            </div>
        </div>
    </div>
}