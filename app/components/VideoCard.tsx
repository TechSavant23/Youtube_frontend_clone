export default function VideoCard(props: any) {
    return <div className="p-4">
        <img src={props.image} width="600" height='600' className="rounded-lg">
        </img>
        <div className="grid grid-cols-12">
            <div className="col-span-1 pt-5">
                <img src={props.channelProfile} className="rounded-full w-16 h-16">
                </img>
            </div>
            <div className="col-span-10 pl-2 pt-5 text-2xl">
                <div className="overflow-hidden">
                    {props.title}
                </div>
                <div className="text-gray-600 pl-2 text-base">
                    {props.channelName}
                </div>
                <div className="flex text-gray-600 pl-2 text-base gap-1.5">
                    {props.views} • {props.timeStamp}
                </div>
            </div>
        </div>
    </div>
}