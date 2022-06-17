import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function NewsLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M5.57 21.093a2.478 2.478 0 01-1.75-.727 2.487 2.487 0 01-.727-1.754V2.906h15.68V6.95H8.048v11.662c-.001.658-.262 1.289-.727 1.754a2.477 2.477 0 01-1.752.727zM4.167 3.978v14.634a1.413 1.413 0 001.407 1.41 1.407 1.407 0 001.408-1.41V5.878h10.725v-1.9H4.167z" }),
        React.createElement(Path, { d: "M18.702 21.093H5.57v-1.071H18.7a1.135 1.135 0 001.137-1.138V6.95h-1.6V5.878h2.67v13.006c0 .585-.233 1.147-.646 1.562a2.203 2.203 0 01-1.559.647z" }),
        React.createElement(Path, { d: "M17.694 9.403h-7.61v1.072h7.61V9.403zM17.694 13.1h-7.61v1.07h7.61V13.1z" }));
}
export default NewsLight;
