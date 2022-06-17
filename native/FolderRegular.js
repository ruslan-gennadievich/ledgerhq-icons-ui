import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function FolderRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M2.76 20.28h18.48V5.568H12l-1.176-1.176c-.48-.48-.96-.672-1.656-.672H2.76v16.56zm1.56-1.464v-8.304h15.36v8.304H4.32zm0-9.792v-3.84h4.848c.264 0 .336.024.552.24l1.608 1.608h8.352v1.992H4.32z" }));
}
export default FolderRegular;
