import Image from "next/image";
import VideoCard from "./components/VideoCard";

export default function Home() {
  return (
    <div>
      <VideoCard 
      title={"Wolverine GamePlay Trailer"}
      image={"wolverine.jpg"} />
    </div>
  )
}