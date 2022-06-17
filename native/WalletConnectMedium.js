import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function WalletConnectMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M6.094 8.04c3.262-3.387 8.55-3.387 11.812 0l.392.408a.445.445 0 010 .613l-1.343 1.394a.203.203 0 01-.295 0l-.54-.56a5.675 5.675 0 00-8.24 0l-.578.6a.203.203 0 01-.296 0L5.664 9.1a.445.445 0 010-.614l.43-.447zm14.589 2.884l1.195 1.24a.445.445 0 010 .614l-5.389 5.595a.407.407 0 01-.59 0l-3.825-3.971a.102.102 0 00-.148 0l-3.824 3.971a.407.407 0 01-.59 0l-5.39-5.596a.445.445 0 010-.613l1.195-1.24a.407.407 0 01.59 0l3.826 3.97c.04.043.106.043.147 0l3.825-3.97a.407.407 0 01.59 0l3.825 3.97c.04.043.107.043.147 0l3.825-3.97a.407.407 0 01.59 0z" }));
}
export default WalletConnectMedium;
