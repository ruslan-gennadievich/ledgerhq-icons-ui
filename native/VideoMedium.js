import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function VideoMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M3.384 9.386a4.019 4.019 0 001.936 1.073H2.472v10.773h15.252v-3.146l4.07 3.383V9.517l-4.07 3.629v-2.687h-2.736a4.02 4.02 0 003.113-3.912 4.02 4.02 0 00-4.014-4.016 4.02 4.02 0 00-3.933 3.21 4.02 4.02 0 00-3.933-3.21 4.02 4.02 0 00-4.014 4.017 4.02 4.02 0 001.177 2.838zm9.802 1.073H7.123a4.02 4.02 0 003.031-3.107 4.02 4.02 0 003.032 3.107zM4.824 5.151c.37-.37.873-.579 1.397-.58V4.57a1.978 1.978 0 010 3.954 1.978 1.978 0 01-1.976-1.976c0-.524.209-1.026.58-1.397zm7.866 0c.37-.37.873-.579 1.396-.58V4.57a1.978 1.978 0 011.398 3.375c-.37.37-.873.579-1.397.58a1.978 1.978 0 01-1.976-1.977c0-.524.208-1.026.579-1.397zM4.51 19.193h11.175v-6.695H4.51v6.695zm15.245-2.07l-1.538-1.279v-.408l1.538-1.37v3.057z" }));
}
export default VideoMedium;
