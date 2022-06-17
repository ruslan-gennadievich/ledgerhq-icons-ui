import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function PodcastLight({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12 14.813a3.069 3.069 0 01-2.187-.925 3.185 3.185 0 01-.907-2.227V5.964c.001-.835.327-1.636.907-2.227A3.069 3.069 0 0112 2.812a3.07 3.07 0 012.186.925c.58.59.907 1.392.908 2.227v5.697c-.001.835-.327 1.636-.907 2.227a3.07 3.07 0 01-2.187.925zm0-10.888c-.531 0-1.04.215-1.415.598-.376.382-.587.9-.587 1.441v5.697c0 .54.211 1.059.587 1.441.375.383.884.598 1.415.598.53 0 1.04-.215 1.415-.598.375-.382.587-.9.587-1.441V5.964c0-.54-.212-1.059-.587-1.441A1.986 1.986 0 0012 3.925z" }),
        React.createElement(Path, { d: "M11.998 17.625A6.337 6.337 0 017.56 15.81a6.149 6.149 0 01-1.841-4.373h1.12a5.053 5.053 0 001.513 3.594 5.208 5.208 0 007.296 0 5.053 5.053 0 001.514-3.594h1.12a6.148 6.148 0 01-1.843 4.374 6.336 6.336 0 01-4.44 1.814z" }),
        React.createElement(Path, { d: "M12.469 17.063h-.938v3.375h.938v-3.375z" }),
        React.createElement(Path, { d: "M14.531 20.063H9.47v1.125h5.062v-1.125z" }));
}
export default PodcastLight;
