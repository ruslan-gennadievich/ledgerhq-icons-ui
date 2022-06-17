import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ClaimRewardsRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M5.208 18.18h13.584v-1.368h-1.824c1.992-1.44 3.192-3.744 3.192-6.312 0-4.488-3.672-8.16-8.16-8.16-4.488 0-8.16 3.672-8.16 8.16 0 2.568 1.2 4.848 3.192 6.312H5.208v1.368zM1.92 21.66h20.16v-6.84h-1.56v5.376H3.48V14.82H1.92v6.84zM5.4 10.5c0-3.648 2.952-6.6 6.6-6.6 3.648 0 6.6 2.952 6.6 6.6 0 3.072-2.16 5.664-5.016 6.312H10.44A6.484 6.484 0 015.4 10.5zM9 11.556c-.024 1.464 1.008 2.52 2.496 2.736v.936h1.008v-.936C13.968 14.124 15 13.164 15 11.94c0-1.176-.816-1.872-2.16-2.04l-1.272-.168c-.792-.096-1.104-.36-1.104-.984 0-.768.552-1.08 1.56-1.08 1.128 0 1.536.36 1.512 1.416h1.296c0-1.296-.96-2.304-2.328-2.52v-.936h-1.008v.96c-1.32.168-2.256 1.08-2.256 2.256 0 1.128.72 1.8 1.968 1.944l1.224.144c.888.096 1.248.384 1.248 1.08 0 .84-.504 1.176-1.656 1.176-1.32 0-1.752-.408-1.776-1.632H9z" }));
}
export default ClaimRewardsRegular;