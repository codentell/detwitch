import React, { useEffect } from "react";
import {  ByMoralis, useMoralis } from "react-moralis";

function Login() {
    const { authenticate } = useMoralis();

    return (
        <div style={{display: "grid", alignItems: "center", justifyContent: "center",}}>
            <section style={{width: "420px", height: "150px", background: "rgb(31, 31, 35)",  padding: "10px"}}>
                <p style={{color: "white",   fontWeight: "bold", textAlign: "center"}}>Log in to deTwitch 📺</p>
                <button style={{ color: "white", height: "50px", fontWeight: "bold", background: "linear-gradient(to right, #a42e9a,#9146FF)",  width: "100%", border: "2px solid transparent", borderRadius: "3px" }}  onClick={() => authenticate({ signingMessage: "Authorize linking of your wallet for deTwitch" })}>🦊 Login with Metmask </button>
                <ByMoralis 
          variant="dark"
          style={{ marginLeft:'auto', marginRight:'auto'}}/> 
            </section>
        </div>
    );
}

export default Login;