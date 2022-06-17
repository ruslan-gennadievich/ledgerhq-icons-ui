import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ArrowToBottomRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12 17.1l5.496-5.496-.96-.96-2.232 2.208c-.504.528-1.056 1.08-1.56 1.632V3.18h-1.488v11.28a33.032 33.032 0 00-1.56-1.608l-2.208-2.208-.984.96L12 17.1zm-8.4 3.72h16.8v-1.56H3.6v1.56z" }));
}
export default ArrowToBottomRegular;
