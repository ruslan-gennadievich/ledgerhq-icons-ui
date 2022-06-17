import * as React from "react";
import Svg from "./StyledSvg";
function DownloadThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M2.64 21.36h18.72v-6.48h-4.08l-.48.48h4.08v5.52H3.12v-5.52H7.2l-.48-.48H2.64v6.48zm2.448-2.448h1.44v-1.44h-1.44v1.44zm2.568-6.696L12 16.56l4.344-4.344-.336-.336-1.872 1.872-1.896 1.896V2.64h-.48v13.008l-1.896-1.896-1.872-1.872-.336.336z" }));
}
export default DownloadThin;
