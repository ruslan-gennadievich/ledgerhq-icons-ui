import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function NewsRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M5.623 21.186a2.623 2.623 0 01-1.854-.77A2.633 2.633 0 013 18.558V2.814h15.884v4.343H8.246V18.56a2.633 2.633 0 01-.77 1.857 2.622 2.622 0 01-1.853.77zm-1.23-16.98v14.349a1.236 1.236 0 001.23 1.233 1.23 1.23 0 001.23-1.233V5.76h10.638V4.206H4.393z" }),
        React.createElement(Path, { d: "M18.646 21.186H5.623v-1.395h13.023a.96.96 0 00.962-.963V7.155h-1.42V5.76H21v13.068c0 .625-.249 1.225-.69 1.667-.441.442-1.04.69-1.664.691z" }),
        React.createElement(Path, { d: "M17.647 9.257h-7.549v1.395h7.55V9.257zM17.647 12.923h-7.549v1.395h7.55v-1.395z" }));
}
export default NewsRegular;
