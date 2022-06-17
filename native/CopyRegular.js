import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CopyRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M17.4 15.48h3.84V2.76l-12.72.024V6.6h1.56V4.248l9.6-.024v9.792H17.4v1.464zM2.76 21.24h12.72V8.52H2.76v12.72zm1.56-1.464V9.984h9.6v9.792h-9.6z" }));
}
export default CopyRegular;
