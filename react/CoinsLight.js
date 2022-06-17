import * as React from "react";
import Svg from "./StyledSvg";
function CoinsLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M9.648 21.3c3.792 0 6.744-1.224 6.744-3.288V16.26c2.736-.336 4.752-1.464 4.752-3.144V5.94c0-2.016-2.856-3.24-6.744-3.24-3.792 0-6.792 1.176-6.792 3.24v1.824c-2.784.336-4.752 1.44-4.752 3.072v7.176c0 2.04 2.904 3.288 6.792 3.288zm-5.712-3.288v-1.704c1.104.912 3.192 1.44 5.712 1.44 2.448 0 4.536-.528 5.664-1.464v1.728c0 1.248-2.184 2.208-5.664 2.208-3.576 0-5.712-.936-5.712-2.208zm0-3.552v-1.776c1.104.912 3.192 1.44 5.712 1.44 2.448 0 4.536-.528 5.664-1.464v1.8c0 1.272-2.184 2.208-5.664 2.208-3.576 0-5.712-.936-5.712-2.208zm0-3.624c0-1.224 2.184-2.16 5.712-2.16 3.576 0 5.664.912 5.664 2.16 0 1.272-2.184 2.208-5.664 2.208-3.576 0-5.712-.936-5.712-2.208zM8.688 5.94c0-1.224 2.184-2.16 5.712-2.16 3.576 0 5.664.912 5.664 2.16 0 1.248-2.448 2.376-6.408 2.208a12.09 12.09 0 00-3.12-.528c-1.2-.384-1.848-.984-1.848-1.68zm6.792 3.24c1.992-.096 3.672-.624 4.584-1.416v1.8c0 .984-1.344 1.776-3.672 2.064v-.792c0-.648-.336-1.2-.912-1.656zm.912 6v-2.448c1.584-.192 2.88-.672 3.672-1.344v1.728c0 .984-1.344 1.776-3.672 2.064z" }));
}
export default CoinsLight;
