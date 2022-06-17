import * as React from "react";
import Svg from "./StyledSvg";
function PodcastThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12.094 14.438a2.823 2.823 0 01-2.812-2.817V6.004a2.824 2.824 0 01.824-1.991 2.814 2.814 0 011.988-.827 2.823 2.823 0 012.813 2.817v5.616c-.001.747-.298 1.463-.825 1.992a2.813 2.813 0 01-1.988.825zm0-10.735a2.298 2.298 0 00-2.298 2.302v5.615a2.306 2.306 0 002.298 2.302 2.298 2.298 0 002.297-2.302V6.005a2.305 2.305 0 00-2.297-2.302z" }),
        React.createElement("path", { d: "M12.002 17.25a5.962 5.962 0 01-4.176-1.704 5.773 5.773 0 01-1.732-4.108h.52a5.266 5.266 0 001.58 3.746 5.438 5.438 0 007.613 0 5.266 5.266 0 001.58-3.746h.52a5.774 5.774 0 01-1.732 4.107 5.961 5.961 0 01-4.173 1.705z" }),
        React.createElement("path", { d: "M12.281 17.063h-.375v3.187h.375v-3.188zM14.719 20.25h-5.25v.563h5.25v-.563z" }));
}
export default PodcastThin;
