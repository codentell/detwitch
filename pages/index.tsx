import React from "react";
import { Player } from '../components/Player';
import Davatar from '@davatar/react';
function Home() {
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
            <section style={{ display: "grid", gridTemplateColumns: "1fr 340px" }}>
                <div>
                    <Player options={videoJsOptions} onReady={handlePlayerReady} />
                    <section style={{display: "grid", gridTemplateColumns: "100px 1fr",  alignItems: "center",}}>
                        <div style={{justifySelf: "center"}}>
                            <Davatar
                                size={70}
                                //0x0e44BA4668CF6D33e05739906d0b66eb50F94A2D
                                //0x0000000000000000000000000000000000000
                                address='0x0e44BA4668CF6D33e05739906d0b66eb50F94A2D'
                                //provider={provider} // optional
                                //graphApiKey={apiKey} // optional
                                generatedAvatarType='jazzicon' // optional, 'jazzicon' or 'blockies'
                            />
                        </div>
                        <div>
                            <h1>Title</h1>
                            <h2>author</h2>
                        </div>
                    </section>
                </div>

                <div style={{ position: "fixed", top: 0, right: "0", height: "100vh", width: "340px", backgroundColor: "#1f1f23" }}>
                    <div style={{ display: "grid", gridTemplateRows: "50px 1fr 95px" }} >
                        <div className="stream-chat-header" style={{ height: "50px", borderBottom: "2px solid #0e0e10", textAlign: "center", fontSize: "16px", color: "white" }}>
                            <p>Live Stream Chat</p>
                        </div>
                        <div className="stream-chat-content" style={{ height: "calc(100vh - 160px)", color: "white" }}>

                        </div>
                        <section className="stream-chat-input" style={{ height: "130px", display: "grid", gridTemplateRows: "1fr 1fr" }}>
                            <div style={{margin: "0px 10px"}}>
                            <textarea style={{background: "#464649", width: "100%", borderRadius: "4px", border: "2px solid transparent"}} ></textarea>
                            </div>
                            <div style={{display: "grid", gridTemplateColumns: "2fr 70px", padding: "0px 10px 10px 10px"}}>
                                <div></div>
                                <button style={{color: "white", fontWeight: "bold", background: "#9146FF", width: "70px", border: "2px solid #9146FF", borderRadius: "3px", height: "30px"}} >Chat</button>
                            </div>
                          
                        </section>

                    </div>
                </div>
            </section>
        </main>
    )
}




export default Home;