import React from "react";
import ColorHash from 'color-hash';

const colorHash = new ColorHash({ saturation: 1.0 });

const stringToColour = (str: string): string => colorHash.hex(str);

const generateColours = (str: string): [string, string] => {
    const s1 = str.substring(0, str.length / 2);
    const s2 = str.substring(str.length / 2);
    const c1 = stringToColour(s1);
    const c2 = stringToColour(s2);

    return [c1, c2];
};

const generateSVG = (str: string, size = 70) => {
    const [c1, c2] = generateColours(str);

    return <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>
        <circle cx={`${size / 2}`} cy={`${size / 2}`} r={`${size / 2}`} fill={"url(#gradient)"} />
        <defs>
            <linearGradient id={"gradient"} x1="0" y1="0" x2={`${size}`} y2={`${size}`} gradientUnits={"userSpaceOnUse"}>
                <stop stopColor={`${c1}`} />
                <stop offset={1} stopColor={`${c2}`} />
            </linearGradient>
        </defs>
    </svg>

};

export default generateSVG;