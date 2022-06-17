import * as React from "react";
import Svg from "./StyledSvg";
function RedelegateThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M2.64 8.184V12h.48V8.184c0-.864.936-1.848 1.848-1.848h16.44l-1.896 1.896-1.872 1.872.336.336 4.344-4.344-4.344-4.344-.336.336 1.872 1.872 1.896 1.896H4.968c-1.152 0-2.328 1.224-2.328 2.328zm-.96 9.72l4.344 4.344.336-.336-1.872-1.872-1.896-1.896h16.44c1.152 0 2.328-1.224 2.328-2.328V12h-.48v3.816c0 .864-.936 1.848-1.848 1.848H2.592l1.896-1.896 1.872-1.872-.336-.336-4.344 4.344z" }));
}
export default RedelegateThin;
