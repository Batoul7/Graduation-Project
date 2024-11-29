// import { useSelector } from "react-redux";
// import { selectFirstPodcast, selectLatestPodcast, selectSecondPodcast } from "../redux/slice/podcastsSlice";
// import { Key } from "react";
import HeroCommon from "../components/HeroCommon/HeroCommon";


export default function PodcastsPage() {


  // const FirstPodcast = useSelector(selectFirstPodcast);  
  // const SecondPodcast = useSelector(selectSecondPodcast);  
  // const LatestPodcast = useSelector(selectLatestPodcast);  


  return (
    <div>
        <HeroCommon CommonHeroTitle={"Unlock the World of Artificial Intelligence through Podcasts "} CommonHeroText={"Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation."} neww={""} podcast={"podcast"} Resourse={""} newcommonhero={""} podcastcommonhero={"podcastcommonhero"} Resourcecommonhero={""} /> 


      {/* <div>
          {FirstPodcast?.map((podcast: any, index: Key | null | undefined) => {
              return(
                <div key={index}>
                  <img src={podcast.img} ></img>
                  <h2>{podcast.title}</h2>
                  <p>{podcast.text}</p>
                    {podcast?.cardTime.map((time: any,index: Key) => {
                      return(
                        <>
                          <p key={index}>{time.txt}</p>
                          <p>{time.num}</p>
                        </>
                     )
                    })}
                    <div>
                      <button>{podcast.btnlisten}</button>
                      <img src={podcast.icon} alt=""></img>
                    </div>
                </div>
              );
          }
          )}
          {SecondPodcast?.map((podcast: any, index: Key | null | undefined) => {
              return(
                <div key={index}>
                  <img src={podcast.img} ></img>
                  <h2>{podcast.title}</h2>
                  <p>{podcast.text}</p>
                    {podcast?.cardTime.map((time: any,index: Key) => {
                      return(
                        <>
                          <p key={index}>{time.txt}</p>
                          <p>{time.num}</p>
                        </>
                      )
                    })}
                    <div>
                      <button>{podcast.btnlisten}</button>
                      <img src={podcast.icon} alt=""></img>                   
                    </div>
                </div>
              );
          }
          )}
          {LatestPodcast?.map((podcast: any, index: Key | null | undefined) => {
              return(
                <div key={index}>
                  <img src={podcast.img} ></img>
                  <h2>{podcast.title}</h2>
                  <p>{podcast.text}</p>
                    {podcast?.cardTime.map((time: any,index: Key) => {
                      return(
                        <>
                          <p key={index}>{time.txt}</p>
                          <p>{time.num}</p>
                        </>
                      )
                    })}
                    <div>
                      <button>{podcast.btnlisten}</button>
                      <img src={podcast.icon} alt=""></img>
                    </div>
                </div>
              );
          }
          )}
      </div> */}
    </div>
  )
}
