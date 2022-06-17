import * as React from "react";
import Svg from "./StyledSvg";
function VideoThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.816 9.404a3.646 3.646 0 002.318 1.059h-3.81v10.35H17.68V16.8l3.995 3.321v-9.674l-3.995 3.563v-3.548H13.89a3.646 3.646 0 003.386-3.633 3.647 3.647 0 00-3.642-3.643 3.646 3.646 0 00-3.623 3.259 3.647 3.647 0 00-3.621-3.258A3.646 3.646 0 002.748 6.83a3.647 3.647 0 001.068 2.574zm9.562 1.059h-6.73a3.646 3.646 0 003.364-3.25 3.646 3.646 0 003.366 3.25zm-9.145-5.79a3.055 3.055 0 012.158-.895A3.055 3.055 0 019.443 6.83 3.055 3.055 0 016.39 9.88 3.055 3.055 0 013.338 6.83c.001-.81.323-1.585.895-2.157zm7.244 0a3.055 3.055 0 012.158-.895 3.055 3.055 0 013.052 3.052 3.055 3.055 0 01-3.052 3.051 3.055 3.055 0 01-3.053-3.051c.001-.81.323-1.585.895-2.157zM2.915 20.222h14.174v-9.169H2.915v9.169zm18.17-1.36l-3.405-2.83v-1.23l3.405-3.037v7.098z" }));
}
export default VideoThin;