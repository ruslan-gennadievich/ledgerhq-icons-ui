import * as React from "react";
import Svg from "./StyledSvg";
function FullnodeMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 21.36c4.248 0 7.704-1.344 7.704-3.792V6.408c0-2.448-3.336-3.768-7.704-3.768-4.248 0-7.704 1.32-7.704 3.768v11.16c0 2.448 3.384 3.792 7.704 3.792zm-5.784-3.792V16.32c1.344.768 3.408 1.2 5.784 1.2 2.352 0 4.416-.432 5.784-1.224v1.272c0 1.008-2.064 1.872-5.784 1.872-3.792 0-5.784-.84-5.784-1.872zm0-3.72V12.6c1.344.792 3.408 1.224 5.784 1.224 2.352 0 4.416-.432 5.784-1.224v1.248c0 1.104-2.112 1.992-5.784 1.992-3.744 0-5.784-.888-5.784-1.992zm0-3.72V8.904c1.344.768 3.408 1.2 5.784 1.2 2.328 0 4.416-.432 5.784-1.224v1.248c0 1.104-2.112 2.016-5.784 2.016-3.744 0-5.784-.912-5.784-2.016zm0-3.72C6.216 5.4 8.28 4.56 12 4.56c3.84 0 5.784.816 5.784 1.848 0 1.128-2.112 2.016-5.784 2.016-3.744 0-5.784-.888-5.784-2.016z" }));
}
export default FullnodeMedium;
