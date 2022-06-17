import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function BlockchainMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M3.06 19.488l4.872 2.832 4.056-2.352 4.056 2.352 4.896-2.832v-5.616L17.7 12l3.24-1.872V4.512L16.044 1.68l-4.056 2.352L7.932 1.68 3.06 4.512v5.616L6.276 12 3.06 13.872v5.616zm1.656-.96V15.6l2.568 1.464v2.952l-2.568-1.488zm0-9.36V6.24l2.568 1.464v2.952L4.716 9.168zm.648 5.28L8.1 12.864l2.568 1.488-2.736 1.56-2.568-1.464zm0-9.36L7.932 3.6 10.5 5.088 7.932 6.552 5.364 5.088zm3.24 14.928v-2.952l2.736-1.584v2.952l-2.736 1.584zm0-9.168V7.704L11.34 6.12v3.144l-2.736 1.584zM9.252 12l2.736-1.584L14.724 12l-2.736 1.584L9.252 12zm3.408 6.432V15.48l2.736 1.584v2.952l-2.736-1.584zm0-9.168V6.12l2.736 1.584v3.144L12.66 9.264zm.648 5.088l2.568-1.488 2.736 1.584-2.568 1.464-2.736-1.56zm.168-9.264L16.044 3.6l2.568 1.488-2.568 1.464-2.568-1.464zm3.24 14.928v-2.952l2.568-1.464v2.928l-2.568 1.488zm0-9.36V7.704l2.568-1.464v2.928l-2.568 1.488z" }));
}
export default BlockchainMedium;
