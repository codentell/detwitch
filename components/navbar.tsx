import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { MoralisProvider, useMoralis } from 'react-moralis';
import Link from 'next/link';

const Navbar = () => {
    const { logout, user } = useMoralis();
    const [userAddress, setUserAddress] = useState('');

    /// USE EFFECT ///
    useEffect(() => {
        if (user) setUserAddress(user.get("ethAddress"));
    });

    return (
        <nav>
            { user && <button style={{ color: "white", fontWeight: "bold", background: "#9146FF", width: "70px", border: "2px solid #9146FF", borderRadius: "3px", height: "30px" }} onClick={logout}>
                Log Out
    </button>}
        </nav>
    )
}

export default Navbar