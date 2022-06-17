import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function EyeNoneRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M20.832 21.888l1.056-1.056-18.72-18.72-1.056 1.056L5.88 6.936A13.961 13.961 0 001.92 12c1.992 4.296 6.192 7.512 10.08 7.512 1.632 0 3.312-.6 4.896-1.56l3.936 3.936zM3.552 12a12.744 12.744 0 013.36-4.032l2.16 2.16c-.336.552-.552 1.2-.552 1.872 0 1.92 1.56 3.48 3.48 3.48.672 0 1.32-.216 1.872-.552l1.944 1.944c-1.272.768-2.52 1.152-3.816 1.152-3.216 0-6.528-2.4-8.448-6.024zm5.52-6.936L10.2 6.216c.6-.168 1.2-.264 1.8-.264 3.168 0 6.456 2.4 8.376 6.048-.528.96-1.104 1.824-1.8 2.592l1.056 1.056A14.09 14.09 0 0022.08 12C20.088 7.704 15.888 4.488 12 4.488c-.984 0-1.968.216-2.928.576zM9.912 12c0-.312.048-.6.168-.864l2.784 2.784c-.264.12-.552.168-.864.168A2.09 2.09 0 019.912 12z" }));
}
export default EyeNoneRegular;
