import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function DumbbellThin({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M11.559 21.634l2.328-2.329c.816-1.175-.48-3.551-2.856-6l2.16-2.16c2.496 2.4 4.92 3.457 6.072 2.785L21.59 11.6c.84-1.2-.528-3.671-3.024-6.167S13.599 1.57 12.399 2.41L10.07 4.738c-.672 1.152.384 3.576 2.784 6.071l-2.16 2.16c-2.448-2.375-4.824-3.671-6-2.855L2.367 12.44c-.696 1.176.432 3.696 2.952 6.24 2.544 2.52 5.064 3.648 6.24 2.953zM2.75 12.729l1.68-1.68c-.024 1.296 1.344 3.337 3.264 5.256 1.92 1.92 3.96 3.288 5.256 3.265l-1.68 1.68c-.936.456-3.24-.529-5.616-2.904-2.376-2.377-3.36-4.68-2.904-5.617zm2.256-2.255c.864-.552 3.024.575 5.328 2.832l-1.272 1.296c-.048.024 0 .143.096.24.096.095.216.143.24.095l1.296-1.271c2.256 2.303 3.384 4.463 2.832 5.328-.672.672-3.12-.648-5.496-3.024-2.376-2.377-3.696-4.825-3.024-5.497zm5.448-5.448l1.68-1.68c-.024 1.296 1.344 3.336 3.264 5.256 1.92 1.92 3.96 3.287 5.256 3.264l-1.68 1.68c-.936.456-3.24-.528-5.616-2.904-2.376-2.376-3.36-4.68-2.904-5.616zM12.71 2.77c.888-.552 3.144.624 5.52 3 2.376 2.376 3.552 4.632 3 5.52-.672.671-3.12-.648-5.496-3.024-2.376-2.376-3.696-4.824-3.024-5.496zm4.056 4.128c-.048.024 0 .144.096.24s.216.144.24.096l.576-.576c.024-.024 0-.144-.096-.24s-.216-.12-.24-.096l-.576.576z" }));
}
export default DumbbellThin;
