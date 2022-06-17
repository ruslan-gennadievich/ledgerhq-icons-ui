import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ThreeCircledFinaRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M10.608 16.68c1.968 0 3.432-1.152 3.432-2.688 0-.984-.624-1.776-1.56-2.04v-.264c.816-.264 1.248-.96 1.248-1.776 0-1.464-1.368-2.592-3.12-2.592-1.872 0-3.264 1.248-3.264 2.808v.168h1.56c0-1.176.408-1.608 1.68-1.608 1.224 0 1.632.384 1.632 1.368 0 .912-.264 1.176-1.512 1.176h-.912V12.6h.936c1.32 0 1.704.336 1.704 1.32 0 1.032-.456 1.368-1.848 1.368-1.416 0-1.8-.384-1.8-1.728H7.2v.12c0 1.728 1.392 3 3.408 3zm-6.456 4.56h6.456c5.184 0 9.24-4.224 9.24-9.24 0-5.16-4.08-9.24-9.24-9.24H4.152v1.56h6.456c4.32 0 7.68 3.36 7.68 7.68 0 4.176-3.36 7.68-7.68 7.68H4.152v1.56z" }));
}
export default ThreeCircledFinaRegular;
