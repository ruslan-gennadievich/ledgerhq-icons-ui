import * as React from "react";
import Svg from "./StyledSvg";
function LanguageLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.028 10.264h-1.082l-1.538 5.331h.792l.358-1.293h1.812l.336 1.293h.814l-1.492-5.331zm-.498.868l.647 2.468h-1.43l.676-2.468h.107z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.608 15.305l-5.432-4.829V3.281h10.698V8.59h6.95v7.309l-5.356 4.82.91-3.433h-6.273v-5.457h-2.34l.843 3.477zm4.404-11.162V8.59h-2.907v.263a2.67 2.67 0 01-.611-.15c.588-.705.767-1.558.82-2.067h.511v-.862H9.153v-.879H8.29v.88H6.619v.861h2.828c-.055.425-.218 1.092-.691 1.601a1.999 1.999 0 01-.543-.924l-.844.173c.069.341.278.825.677 1.257-.395.178-.869.262-1.417.25l-.018.862h.114c.81 0 1.5-.178 2.061-.532.36.199.795.345 1.32.397v1.247H6.67l.452 1.865-3.084-2.742V4.143h8.974zm-2.045 12.28H17.5l-.455 1.717 2.915-2.626V9.451h-8.991v6.972z" }));
}
export default LanguageLight;
