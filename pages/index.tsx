import React, { useEffect, useState } from "react";
import { Player } from '../components/Player';
import Davatar from '@davatar/react';
import axios from "axios";

const Home = () => {
    const playbackURL = "https://livepeercdn.com/hls/9ed3fzyh3aqaanxa/index.m3u8"
    const [isActive, setActive] = useState(false)
    const playerRef = React.useRef(null);


    const getData = async () => {
        
        try {
            const { data } = await axios.get("/api/active");
            console.log(data);
            setActive(data.isActive)
            // 👇️ const data: UpdateUserResponse
            // const { data } = await axios.post(`https://livepeer.com/api/stream/${"9ed36315-72e0-4e12-8fcd-52ff154b671b"}`, {
            //     headers: {
            //         "Access-Control-Allow-Origin": "*",
            //         authorization: "Bearer f46408f6-3cf4-4760-9051-fe6710225428"
            //     },
            // });

        //     console.log(JSON.stringify(data, null, 4));
        //     return data;
         } catch (error) {

         }
    }

    useEffect(() => {
        getData();
    }, [isActive]);



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
                        <section style={{ display: "grid", gridTemplateColumns: "100px 1fr", alignItems: "center", }}>
                            <div style={{ justifySelf: "center" }}>
                                <div style={{ padding: "10px" }}>
                                    <div style={{ background: "orange", borderRadius: "100%", padding: "5px" }}>
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
                                    { isActive ? <div className="live" style={{
                                        textAlign: "center",
                                        width: "50px",
                                        margin: "0 auto", color: "white", fontWeight: "bold", background: "red", padding: "5px", borderRadius: "3px"
                                    }}>LIVE</div>: <div></div>}
                                </div>
                            </div>
                            <div style={{ color: "white" }}>
                                <h1>title</h1>
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
                                <div style={{ margin: "0px 10px" }}>
                                    <textarea style={{ background: "#464649", width: "100%", borderRadius: "4px", border: "2px solid transparent" }} ></textarea>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "2fr 70px", padding: "0px 10px 10px 10px" }}>
                                    <div></div>
                                    <button style={{ color: "white", fontWeight: "bold", background: "#9146FF", width: "70px", border: "2px solid #9146FF", borderRadius: "3px", height: "30px" }} >Chat</button>
                                </div>

                            </section>

                        </div>
                    </div>
                </section>
            </main>
        )
    }




    export default Home;