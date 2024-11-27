// import { useSelector } from "react-redux";
// import { selectFirstPodcast, selectLatestPodcast, selectSecondPodcast } from "../redux/slice/podcastsSlice";
// import { Key } from "react";



export default function PodcastsPage() {


  // const FirstPodcast = useSelector(selectFirstPodcast);  
  // const SecondPodcast = useSelector(selectSecondPodcast);  
  // const LatestPodcast = useSelector(selectLatestPodcast);  


  return (
    <div>
      Podcasts
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
