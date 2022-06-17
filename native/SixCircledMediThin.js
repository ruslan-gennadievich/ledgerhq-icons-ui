import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function SixCircledMediThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M11.976 16.704c1.752 0 3-1.32 3-3.096s-1.248-3.096-3-3.096c-1.416 0-2.472.864-2.808 2.136h-.024c-.12-2.52.408-4.824 2.88-4.824 1.392 0 2.232.768 2.448 2.184h.48c-.216-1.608-1.344-2.664-2.928-2.664-2.16 0-3.408 1.872-3.384 4.8.024 2.856 1.248 4.56 3.336 4.56zM5.76 20.88h12.48v-.48H5.76v.48zm0-17.28h12.48v-.48H5.76v.48zm3.672 10.032v-.048c0-1.536.936-2.592 2.52-2.592H12c1.536 0 2.496 1.032 2.496 2.592v.048c0 1.56-.96 2.592-2.496 2.592h-.048c-1.608 0-2.52-1.176-2.52-2.592z" }));
}
export default SixCircledMediThin;
