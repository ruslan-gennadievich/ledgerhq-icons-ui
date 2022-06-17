import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function LanguageUltraLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M16.145 10.34h-1.112l-1.585 5.486h.814l.369-1.33h1.867l.344 1.33h.84l-1.537-5.486zm-.512.893l.666 2.54h-1.472l.696-2.54h.11z" }),
        React.createElement(Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M8.292 15.163l-5.244-4.662v-7.22h10.754v5.462h7.15v7.337l-5.15 4.639.87-3.282h-6.493v-5.615H7.483l.81 3.341zM13.17 3.915v4.828h-2.99v.284a2.863 2.863 0 01-.968-.244c.728-.78.9-1.792.94-2.304h.64v-.633H8.946V4.814H8.31v1.032H6.464v.633h3.051c-.042.448-.204 1.302-.814 1.919a2.362 2.362 0 01-.034.034 2.2 2.2 0 01-.687-1.104l-.62.127c.002.012.158.736.79 1.354-.456.245-1.018.362-1.68.35l-.012.633h.114c.841 0 1.55-.192 2.117-.569.383.227.87.396 1.49.44v1.525H6.677l.523 2.156-3.518-3.127V3.915h9.487zm-2.357 12.889h6.684l-.536 2.02 3.357-3.026V9.376h-9.505v7.428z" }));
}
export default LanguageUltraLight;
