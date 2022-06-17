import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function NanoAdd3Medium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M11.25 3v3.25H8v1.5h3.25V11h1.5V7.75H16v-1.5h-3.25V3h-1.5zM13.296 18.84a.902.902 0 01-.888-.888c0-.504.408-.912.888-.912.48 0 .912.408.912.912 0 .48-.432.888-.912.888z" }),
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M21.36 21.36H2.64l.024-6.84H21.36v6.84zM4.344 16.2l-.024 3.48h5.88a3.284 3.284 0 01-.48-1.728c0-.648.168-1.248.48-1.752H4.344zm8.736 0c-.888 0-1.68.792-1.68 1.752 0 .936.792 1.728 1.68 1.728h6.6V16.2h-6.6z" }));
}
export default NanoAdd3Medium;
