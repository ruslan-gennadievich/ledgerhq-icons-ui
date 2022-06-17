import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function EightCircledLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12 21.12c5.112 0 9.12-4.152 9.12-9.12 0-5.088-4.032-9.12-9.12-9.12-5.088 0-9.12 4.032-9.12 9.12 0 5.088 4.032 9.12 9.12 9.12zM4.08 12c0-4.44 3.48-7.92 7.92-7.92 4.44 0 7.92 3.48 7.92 7.92 0 4.32-3.48 7.92-7.92 7.92-4.44 0-7.92-3.48-7.92-7.92zm4.584 2.04c0 1.512 1.392 2.664 3.312 2.664h.048c1.92 0 3.312-1.152 3.312-2.664 0-.984-.6-1.776-1.56-2.112v-.168c.792-.312 1.296-1.032 1.296-1.92 0-1.416-1.32-2.496-3.048-2.496h-.048c-1.728 0-3.048 1.08-3.048 2.496 0 .888.504 1.632 1.32 1.944v.144c-.984.312-1.584 1.128-1.584 2.112zm1.272.12v-.312c0-.912.648-1.416 2.016-1.416h.144c1.368 0 2.016.504 2.016 1.416v.312c0 .936-.672 1.464-2.016 1.464h-.144c-1.344 0-2.016-.528-2.016-1.464zm.144-4.08v-.312c0-.84.624-1.344 1.848-1.344h.144c1.2 0 1.848.504 1.848 1.344v.312c0 .84-.624 1.32-1.848 1.32h-.144c-1.248 0-1.848-.48-1.848-1.32z" }));
}
export default EightCircledLight;