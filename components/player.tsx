import React from "react"
import videojs from "video.js"
import "video.js/dist/video-js.css"

const Player = (props) => {
  const videoRef = React.useRef(null)
  const playerRef = React.useRef(null)
  const { options, onReady } = props

  React.useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current
      if (!videoElement) return

      const player = videojs(videoElement, options, () => {
        console.log("player is ready")
        onReady && onReady(player)
      })
      playerRef.current = player
    } else {
      // you can update player here [update player through props]. the only
      // thing we really change right now is the source.
      const player = playerRef.current
      player.src(options.sources)
      // player.autoplay(options.autoplay);
    }
  }, [options, videoRef])

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  return (
    <>
      <div data-vjs-player>
        <video
          ref={videoRef}
          className="video-js vjs-big-play-centered"
          height="500px"
        />
      </div>
    </>
  )
}

export default Player
