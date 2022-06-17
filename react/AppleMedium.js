import * as React from "react";
import Svg from "./StyledSvg";
function AppleMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M9 21.84c.48 0 1.176-.216 1.632-.408.624-.24 1.248-.384 1.8-.384.504 0 1.08.144 1.752.384.624.264 1.152.408 1.608.408.624 0 1.2-.288 1.752-.792.336-.264.792-.84 1.344-1.632.408-.552.768-1.2 1.08-1.896l.336-.912c-1.536-.648-2.688-2.112-2.688-4.008-.048-1.632.696-2.904 2.184-3.792-.864-1.2-2.088-1.848-3.72-1.968-.648-.048-1.392.096-2.256.408-.936.336-1.512.504-1.68.504-.192 0-.72-.144-1.464-.456-.816-.264-1.416-.408-1.896-.408-.864.024-1.656.216-2.4.672-.768.432-1.344 1.032-1.8 1.824-.576.936-.888 2.088-.888 3.408 0 1.128.216 2.328.672 3.576a11.903 11.903 0 001.488 2.976c.6.84 1.056 1.392 1.44 1.704.552.528 1.128.792 1.704.792zm3.024-15.384c0 .12 0 .24.024.36 2.088.192 4.104-2.088 4.104-4.272V2.16a3.9 3.9 0 00-1.608.456c-1.536.768-2.52 2.304-2.52 3.84z" }));
}
export default AppleMedium;
