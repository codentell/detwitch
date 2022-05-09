import React from "react";
import { Player } from '../components/Player';

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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere vitae elit a vulputate. Sed vel massa neque. Aliquam tincidunt rutrum nisi, vel fringilla nulla mollis ac. Mauris eget consectetur velit, eu ultricies orci. Ut sit amet quam augue. Fusce scelerisque nulla sit amet congue efficitur. Nunc mattis ac neque at convallis.

                    Curabitur cursus lacus nec mauris efficitur, in tempus turpis pretium. Morbi accumsan gravida rutrum. Cras fermentum condimentum neque in posuere. Praesent mattis neque non consequat cursus. Morbi tempus eros sed lacus mattis, eu sodales urna posuere. Fusce elementum elit id ante laoreet, eget bibendum tortor tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean non felis elit. Sed efficitur suscipit erat, vitae hendrerit odio porta at. Integer egestas diam non mattis semper.

                    Nulla ut tortor molestie, facilisis velit sed, finibus purus. Aenean fermentum dapibus nunc. Suspendisse gravida mi ac tempus dignissim. Nam posuere justo lacus, eu pretium eros hendrerit eu. Donec pretium enim id enim tempus vulputate. Mauris sit amet augue non tellus blandit tincidunt. Donec justo nunc, imperdiet nec volutpat ut, laoreet fermentum lacus. Maecenas nec condimentum ante. Phasellus ornare accumsan nunc sit amet viverra. Curabitur metus arcu, dapibus ac consectetur eget, consequat a dolor. Ut vitae justo vitae mauris varius lobortis non porta erat. Aliquam erat volutpat. Pellentesque sem dolor, viverra ut commodo eu, interdum eget mi. Donec sed augue in mauris imperdiet sollicitudin. Sed fringilla porttitor ultricies. Aliquam ullamcorper nec dui at fringilla.

                    Vivamus malesuada efficitur iaculis. Nunc ut lectus lacinia, interdum neque id, ultrices nulla. Sed dapibus arcu id eros interdum porttitor. Suspendisse tempus dolor dignissim libero ultricies ultrices in et augue. Maecenas mollis interdum nulla, vitae lobortis velit facilisis ac. Suspendisse in interdum ipsum, eget condimentum est. Aenean ut dui eu libero hendrerit tempus eu eu dolor. Ut suscipit rutrum dictum. Sed imperdiet mauris non eros elementum sodales. Aenean quis ultrices orci. Integer nibh massa, dictum vitae lacus eget, aliquam semper ante. Fusce mattis libero non ipsum luctus aliquet. Nulla enim nibh, pulvinar a dignissim porta, commodo eget lectus. Mauris sollicitudin, augue sed sagittis vulputate, nisi lorem ornare ante, ac iaculis leo sem et mauris.

Duis quis suscipit purus. Nullam viverra justo et massa dapibus, id mollis lectus condimentum. Fusce vel ex tincidunt, hendrerit tellus non, venenatis ante. Sed egestas erat id justo fermentum, eu lacinia erat fringilla. Maecenas ullamcorper rutrum massa eget finibus. Duis sed mauris ut mauris efficitur tincidunt vel in arcu. Vivamus id finibus leo. Ut elit est, ultricies viverra suscipit nec, blandit sit amet ligula. Suspendisse fringilla, ex non aliquam pellentesque, urna orci imperdiet magna, a euismod diam tellus ut lorem. Phasellus pharetra eu magna at lobortis. Praesent felis ex, vulputate a felis convallis, rhoncus interdum arcu. Sed nec blandit ipsum. Morbi et nunc porttitor, porta erat non, consectetur justo. Sed malesuada dui ut quam malesuada maximus. Etiam ut viverra diam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere vitae elit a vulputate. Sed vel massa neque. Aliquam tincidunt rutrum nisi, vel fringilla nulla mollis ac. Mauris eget consectetur velit, eu ultricies orci. Ut sit amet quam augue. Fusce scelerisque nulla sit amet congue efficitur. Nunc mattis ac neque at convallis.

                    Curabitur cursus lacus nec mauris efficitur, in tempus turpis pretium. Morbi accumsan gravida rutrum. Cras fermentum condimentum neque in posuere. Praesent mattis neque non consequat cursus. Morbi tempus eros sed lacus mattis, eu sodales urna posuere. Fusce elementum elit id ante laoreet, eget bibendum tortor tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean non felis elit. Sed efficitur suscipit erat, vitae hendrerit odio porta at. Integer egestas diam non mattis semper.

                    Nulla ut tortor molestie, facilisis velit sed, finibus purus. Aenean fermentum dapibus nunc. Suspendisse gravida mi ac tempus dignissim. Nam posuere justo lacus, eu pretium eros hendrerit eu. Donec pretium enim id enim tempus vulputate. Mauris sit amet augue non tellus blandit tincidunt. Donec justo nunc, imperdiet nec volutpat ut, laoreet fermentum lacus. Maecenas nec condimentum ante. Phasellus ornare accumsan nunc sit amet viverra. Curabitur metus arcu, dapibus ac consectetur eget, consequat a dolor. Ut vitae justo vitae mauris varius lobortis non porta erat. Aliquam erat volutpat. Pellentesque sem dolor, viverra ut commodo eu, interdum eget mi. Donec sed augue in mauris imperdiet sollicitudin. Sed fringilla porttitor ultricies. Aliquam ullamcorper nec dui at fringilla.

                    Vivamus malesuada efficitur iaculis. Nunc ut lectus lacinia, interdum neque id, ultrices nulla. Sed dapibus arcu id eros interdum porttitor. Suspendisse tempus dolor dignissim libero ultricies ultrices in et augue. Maecenas mollis interdum nulla, vitae lobortis velit facilisis ac. Suspendisse in interdum ipsum, eget condimentum est. Aenean ut dui eu libero hendrerit tempus eu eu dolor. Ut suscipit rutrum dictum. Sed imperdiet mauris non eros elementum sodales. Aenean quis ultrices orci. Integer nibh massa, dictum vitae lacus eget, aliquam semper ante. Fusce mattis libero non ipsum luctus aliquet. Nulla enim nibh, pulvinar a dignissim porta, commodo eget lectus. Mauris sollicitudin, augue sed sagittis vulputate, nisi lorem ornare ante, ac iaculis leo sem et mauris.

Duis quis suscipit purus. Nullam viverra justo et massa dapibus, id mollis lectus condimentum. Fusce vel ex tincidunt, hendrerit tellus non, venenatis ante. Sed egestas erat id justo fermentum, eu lacinia erat fringilla. Maecenas ullamcorper rutrum massa eget finibus. Duis sed mauris ut mauris efficitur tincidunt vel in arcu. Vivamus id finibus leo. Ut elit est, ultricies viverra suscipit nec, blandit sit amet ligula. Suspendisse fringilla, ex non aliquam pellentesque, urna orci imperdiet magna, a euismod diam tellus ut lorem. Phasellus pharetra eu magna at lobortis. Praesent felis ex, vulputate a felis convallis, rhoncus interdum arcu. Sed nec blandit ipsum. Morbi et nunc porttitor, porta erat non, consectetur justo. Sed malesuada dui ut quam malesuada maximus. Etiam ut viverra diam.</p>

                </div>

                <div style={{ position: "fixed", top: 0, right: "0", height: "100vh", width: "340px", backgroundColor: "red" }}>
                    <div style={{ display: "grid", gridTemplateRows: "50px 1fr 95px" }} >
                        <div className="stream-chat-header" style={{ height: "50px", borderBottom: "1px solid black" }}>
                            Live Stream Chat
                    </div>
                        <div className="stream-chat-content" style={{height: "calc(100vh - 95px)"}}>

                        </div>
                        <section className="stream-chat-input" style={{height: "95px"}}>

                            <textarea></textarea>
                            <button>Chat</button>
                        </section>

                    </div>
                </div>
            </section>
        </main>
    )
}




export default Home;