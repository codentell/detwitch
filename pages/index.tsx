import React from "react";
import { Player } from '../components/Player';

function Home (){
        const playbackURL = "https://livepeercdn.com/hls/ba42he2hjl9s26d5/index.m3u8"
    
        const playerRef = React.useRef(null);
    
        const videoJsOptions = {
            // lookup the options in the docs for more options
            autoplay: true,
            controls: true,
            responsive: true,
            fluid: true,
            height: 10,
            width: 10,
            sources: [
                {
                    src: playbackURL,
                    type: "application/x-mpegURL"
                },
            ],
        };
    
        const handlePlayerReady = (player) => {
            playerRef.current = player;
    
            // you can handle player events here
            player.on("waiting", () => {
                console.log("player is waiting");
            });
    
            player.on("dispose", () => {
                console.log("player will dispose");
            });
        };
    
        return (
            <main>
            <section style={{display: "grid", gridTemplateColumns: "1fr 340px"}}>
                <Player options={videoJsOptions} onReady={handlePlayerReady} />
                <div style={{display: "grid", gridTemplateRows: "50px 4fr 95px"}}>
                    <div className="stream-chat-header" style={{height: "50px", borderBottom: "1px solid black"}}>
                        Live Stream Chat
                    </div>
                    <div className="stream-chat-content">

                    </div>
                    <section className="stream-chat-input">

                        <textarea></textarea>   
                        <button>Chat</button>
                    </section>
   
                </div>
            </section>
            </main>
        )
}
   



export default Home;