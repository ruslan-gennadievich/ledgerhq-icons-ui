import * as React from "react";
import Svg from "./StyledSvg";
function ActivityRegular({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M2.4 12.852h4.344l2.352-7.056 5.808 17.376 3.48-10.32H21.6v-1.656h-4.32l-2.376 7.032L9.096.828 5.64 11.196H2.4v1.656z" }));
}
export default ActivityRegular;
