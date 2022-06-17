import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function EyeNoneUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M21.072 21.648l.576-.576-18.72-18.72-.576.576 4.056 4.056A13.718 13.718 0 002.4 12c1.896 4.08 5.88 7.152 9.6 7.152 1.656 0 3.36-.624 4.92-1.656l4.152 4.152zM3.312 12a12.299 12.299 0 013.672-4.44l2.448 2.448A3.217 3.217 0 008.76 12c0 1.8 1.44 3.24 3.24 3.24.744 0 1.44-.24 1.992-.672l2.352 2.352c-1.416.936-2.88 1.416-4.344 1.416-3.336 0-6.84-2.616-8.688-6.336zm6.024-6.672l.624.648A6.725 6.725 0 0112 5.64c3.336 0 6.816 2.64 8.688 6.36a13.411 13.411 0 01-1.896 2.808l.576.576A14.51 14.51 0 0021.6 12c-1.896-4.08-5.88-7.152-9.6-7.152-.888 0-1.8.168-2.664.48zM9.552 12c0-.552.168-1.032.456-1.416l3.408 3.408a2.43 2.43 0 01-1.416.456A2.428 2.428 0 019.552 12z" }));
}
export default EyeNoneUltraLight;
