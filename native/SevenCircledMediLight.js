import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function SevenCircledMediLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M11.208 16.44h1.368c.312-3.144 1.488-5.688 3.528-7.584V7.584H9.528V8.64h5.184v.336c-2.016 2.112-3.168 4.608-3.504 7.464zM5.76 21.12h12.48v-1.2H5.76v1.2zm0-17.04h12.48v-1.2H5.76v1.2z" }));
}
export default SevenCircledMediLight;
