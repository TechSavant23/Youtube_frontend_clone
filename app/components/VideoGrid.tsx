import VideoCard from "./VideoCard";

const VIDEOS= [
  {
  title:"Wolverine GamePlay Trailer | PlayStation | PS5 - Games",
  image:"wolverine.jpg",
  channelProfile:"playstation.jpg",
  channelName:"PlayStation",
  timeStamp:"2 weeks ago",
  views:"3.4M views"
  }, 
  {
  title:"Spider-Man 2 Official Gameplay Trailer | PlayStation | PS5",
  image:"spiderman2.jpg",
  channelProfile:"playstation.jpg",
  channelName:"PlayStation",
  timeStamp:"1 month ago",
  views:"6.1M views"
  },
  {
  title:"The Legend of Zelda: Echoes - New Gameplay | Nintendo Switch",
  image:"zelda.jpg",
  channelProfile:"nintendo.jpg",
  channelName:"Nintendo",
  timeStamp:"3 days ago",
  views:"980K views"
  },
  {
  title:"Forza Motorsport - Real Driving Experience | Xbox Series X",
  image:"forza.jpg",
  channelProfile:"xbox.jpg",
  channelName:"Xbox",
  timeStamp:"5 months ago",
  views:"1.2M views"
  },
  {
  title:"Cyberpunk 2077: Phantom Liberty - Story Trailer",
  image:"cyberpunk_phantom.jpg",
  channelProfile:"cdprojekt.jpg",
  channelName:"CD Projekt RED",
  timeStamp:"4 weeks ago",
  views:"2.7M views"
  }
];

export default function VideoGrid() {
    return <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
        {VIDEOS.map (videos => 
                <VideoCard 
                key={videos.title}
                title={videos.title}
                image={videos.image}
                channelProfile={videos.channelProfile}
                channelName={videos.channelName}
                timeStamp={videos.timeStamp}
                views={videos.views}
                />
            )}
    </div>
} 