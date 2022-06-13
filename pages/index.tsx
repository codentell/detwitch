import React, { useEffect, useMemo, useState } from "react"
import Player from "../components/player"
import Login from "../components/login"
import Davatar from "@davatar/react"
import Chat from "../components/chat"
import { useMoralis } from "react-moralis"
import randomWords from "random-words"
import axios from "axios"

import generateSVG from "../components/gradientAvatar"

const Home = () => {
  const { isAuthenticated, user, Moralis } = useMoralis()
  // TODO: This should come from moralis db
  const streamId = process.env.LIVEPEER_STREAM_ID
  const [isActive, setActive] = useState(false)
  const [playbackUrl, setPlaybackUrl] = useState(null as string)
  const playerRef = React.useRef(null)
  const [inputStr, setInputStr] = useState("")
  const [title, setTitle] = useState(randomWords(5).join(" "))

  const getData = async () => {
    try {
      const { data } = await axios.get(`/api/stream/${streamId}`)
      console.log(data)
      setPlaybackUrl(
        `https://livepeercdn.com/hls/${data.playbackId}/index.m3u8`
      )
      setActive(data.isActive)
    } catch (error) {}
  }

  useEffect(() => {
    if (user) {
      getData()
    }
  }, [user, isActive])

  const videoJsOptions = useMemo(
    () => ({
      // lookup the options in the docs for more options
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      height: 10,
      width: 10,
      sources: [
        {
          src: playbackUrl,
          type: "application/x-mpegURL",
        },
      ],
    }),
    [playbackUrl]
  )

  const handlePlayerReady = (player) => {
    playerRef.current = player

    // you can handle player events here
    player.on("waiting", () => {
      console.log("player is waiting")
    })

    player.on("dispose", () => {
      console.log("player will dispose")
    })
  }

  console.log(isAuthenticated)
  return isAuthenticated ? (
    <main>
      <section style={{ display: "grid", gridTemplateColumns: "1fr 340px" }}>
        <div>
          <Player options={videoJsOptions} onReady={handlePlayerReady} />
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr",
              alignItems: "center",
            }}
          >
            <div style={{ justifySelf: "center" }}>
              <div style={{ padding: "10px" }}>
                <div
                  style={{
                    background: isActive ? "#3DE01F" : "transparent",
                    borderRadius: "100%",
                    padding: "5px",
                  }}
                >
                  {user.get("accounts")![0] ? (
                    <Davatar
                      size={70}
                      address={user.get("accounts")[0]}
                      generatedAvatarType="jazzicon" // optional, 'jazzicon' or 'blockies'
                    />
                  ) : (
                    generateSVG("detwitch")
                  )}
                </div>
                {isActive ? (
                  <div
                    className="live"
                    style={{
                      textAlign: "center",
                      width: "50px",
                      margin: "0 auto",
                      color: "white",
                      fontWeight: "bold",
                      background: "red",
                      padding: "5px",
                      borderRadius: "3px",
                    }}
                  >
                    LIVE
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div style={{ color: "white" }}>
              <h2>Title: {title.charAt(0).toUpperCase() + title.slice(1)}</h2>
              <h3>Description: {randomWords(5).join(" ")}</h3>
            </div>
          </section>
        </div>

        <div
          style={{
            position: "fixed",
            top: 0,
            right: "0",
            height: "100vh",
            width: "340px",
            backgroundColor: "#1f1f23",
          }}
        >
          <div style={{ display: "grid", gridTemplateRows: "50px 1fr 95px" }}>
            <div
              className="stream-chat-header"
              style={{
                height: "50px",
                borderBottom: "2px solid #0e0e10",
                textAlign: "center",
                fontSize: "16px",
                color: "white",
              }}
            >
              <p>Live Stream Chat</p>
            </div>
            <div
              className="stream-chat-content"
              style={{ height: "calc(100vh - 160px)", color: "white" }}
            >
              <Chat />
            </div>
            <section
              className="stream-chat-input"
              style={{
                height: "130px",
                display: "grid",
                gridTemplateRows: "1fr 1fr",
              }}
            >
              {/* <div style={{ margin: "0px 10px" }}>

                                <textarea style={{ background: "#464649", width: "100%", borderRadius: "4px", border: "2px solid transparent", resize: "none", color: "white", caretColor: "white" }} ></textarea>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "2fr 70px", padding: "0px 10px 10px 10px" }}>
                                <div></div>
                                <button style={{ color: "white", fontWeight: "bold", background: "#9146FF", width: "70px", border: "2px solid #9146FF", borderRadius: "3px", height: "30px" }} >Chat</button>
                            </div> */}
            </section>
          </div>
        </div>
      </section>
    </main>
  ) : (
    <Login />
  )
}

export default Home
