import * as React from "react";
import Svg from "./StyledSvg";
function GroupRegular({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M5.832 17.892v1.728h12.336v-1.728c0-3.216-2.184-4.824-4.584-4.824h-3.168c-2.736 0-4.584 1.92-4.584 4.824zM1.68 19.62h1.56v-1.368c0-1.008.384-1.608 1.152-1.8.12-.576.264-1.08.504-1.536-1.776.12-3.216 1.464-3.216 3.888v.816zm.072-9.24a2.91 2.91 0 002.928 2.928 2.93 2.93 0 002.952-2.928A2.95 2.95 0 004.68 7.428a2.93 2.93 0 00-2.928 2.952zm1.272 0A1.66 1.66 0 014.68 8.724a1.66 1.66 0 011.656 1.656 1.66 1.66 0 01-1.656 1.656 1.66 1.66 0 01-1.656-1.656zm4.416 7.896v-1.2c0-1.68.888-2.544 2.664-2.544h3.792c1.776 0 2.664.864 2.664 2.544v1.2H7.44zm.744-10.2c0 2.088 1.728 3.72 3.816 3.72s3.816-1.632 3.816-3.72S14.088 4.38 12 4.38 8.184 5.988 8.184 8.076zm1.488 0A2.315 2.315 0 0112 5.748a2.335 2.335 0 012.352 2.328c0 1.32-1.056 2.328-2.352 2.328a2.3 2.3 0 01-2.328-2.328zm6.72 2.304a2.91 2.91 0 002.928 2.928 2.93 2.93 0 002.952-2.928 2.95 2.95 0 00-2.952-2.952 2.93 2.93 0 00-2.928 2.952zm1.272 0a1.66 1.66 0 011.656-1.656 1.66 1.66 0 011.656 1.656 1.66 1.66 0 01-1.656 1.656 1.66 1.66 0 01-1.656-1.656zm1.44 4.536c.24.456.384.96.504 1.536.768.192 1.152.792 1.152 1.8v1.368h1.56v-.816c0-2.424-1.416-3.768-3.216-3.888z" }));
}
export default GroupRegular;