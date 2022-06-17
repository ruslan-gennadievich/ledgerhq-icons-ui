import * as React from "react";
import Svg from "./StyledSvg";
function ShieldMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 21.84c6.24-2.472 9.36-6.408 9.36-11.712v-5.04C18.696 3.168 15.456 2.16 12 2.16c-3.456 0-6.696 1.008-9.36 2.928v5.04c0 5.304 3.12 9.24 9.36 11.712zM4.56 10.128V6C6.792 4.608 9.192 3.96 12 3.96c2.808 0 5.208.648 7.44 2.04v4.128c0 4.512-2.232 7.512-7.44 9.744-5.208-2.232-7.44-5.232-7.44-9.744z" }));
}
export default ShieldMedium;
