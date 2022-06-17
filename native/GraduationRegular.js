import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function GraduationRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M5.557 9.34L.947 7.518l11.056-4.332 11.05 4.33-4.433 1.768v6.084l1.768 2.235-2.169 3.209-2.208-3.21 1.532-1.906v-1.47l-5.54 2.071-6.446-2.426V9.34zm1.076.425l5.42 2.14 5.49-2.19v3.362l-5.539 2.072-5.371-2.021V9.764zm9.805-.768l-4.387 1.75-8.164-3.224 8.116-3.18 8.122 3.182-2.157.86-5.704-1.968-.352 1.017 4.526 1.563zm.918 8.658l.859 1.247.845-1.247-.845-1.068-.859 1.068z" }));
}
export default GraduationRegular;
