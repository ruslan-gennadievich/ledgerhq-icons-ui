import * as React from "react";
import Svg from "./StyledSvg";
function CalendarMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.9 2v1h6.2V2h1.8v1H21v18H3V3h4.1V2h1.8zm6.2 2.8V8h1.8V4.8h2.3v5.3H4.8V4.8h2.3V8h1.8V4.8h6.2zm4.1 7.1v7.3H4.8v-7.3h14.4z" }));
}
export default CalendarMedium;
