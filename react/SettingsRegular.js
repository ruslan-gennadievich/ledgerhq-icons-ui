import * as React from "react";
import Svg from "./StyledSvg";
function SettingsRegular({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M14.592 22.104l.264-3.12a7.466 7.466 0 001.872-1.032l2.808 1.32 2.544-4.392-2.52-1.728c.048-.384.072-.744.072-1.152 0-.408-.024-.768-.072-1.152l2.52-1.728-2.52-4.392-2.808 1.296a7.618 7.618 0 00-1.896-1.032l-.264-3.096H9.408l-.264 3.096a7.54 7.54 0 00-1.872 1.056l-2.808-1.32L1.92 9.096l2.568 1.776c-.048.36-.072.744-.072 1.128 0 .384.024.768.072 1.128L1.92 14.904l2.544 4.368 2.808-1.32a7.54 7.54 0 001.872 1.056l.264 3.096h5.184zM3.96 15.336l2.28-1.584A5.348 5.348 0 015.976 12c0-.648.072-1.152.264-1.752L3.96 8.664l1.152-1.992L7.56 7.824c.888-.912 1.8-1.464 3.072-1.728l.216-2.736h2.304l.216 2.736c1.296.288 2.208.792 3.096 1.704l2.424-1.128 1.152 2.016-2.232 1.512c.192.672.264 1.176.264 1.8 0 .624-.072 1.128-.264 1.8l2.232 1.512-1.152 2.016-2.448-1.152c-.864.888-1.8 1.416-3.072 1.752l-.216 2.712h-2.304l-.216-2.736c-1.272-.264-2.184-.816-3.072-1.728l-2.448 1.152-1.152-1.992zM8.52 12c0 1.92 1.56 3.48 3.48 3.48s3.48-1.56 3.48-3.48S13.92 8.52 12 8.52 8.52 10.08 8.52 12zm1.392 0c0-1.152.936-2.112 2.088-2.112A2.13 2.13 0 0114.112 12c0 1.152-.96 2.088-2.112 2.088A2.09 2.09 0 019.912 12z" }));
}
export default SettingsRegular;
