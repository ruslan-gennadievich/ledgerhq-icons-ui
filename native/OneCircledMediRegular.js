import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function OneCircledMediRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12.072 13.128v3.336h1.56v-8.88H11.64l-2.904 2.688v1.848l2.976-2.736h.408c0 .312-.048 1.824-.048 3.744zM5.76 21.24h12.48v-1.56H5.76v1.56zm0-16.92h12.48V2.76H5.76v1.56z" }));
}
export default OneCircledMediRegular;
