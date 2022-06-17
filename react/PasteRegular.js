import * as React from "react";
import Svg from "./StyledSvg";
function PasteRegular({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M11.669 15.888h4.77v1.032h-4.77v-1.032zM11.669 12.064h4.77v1.032h-4.77v-1.032z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.588 18.423h3.686v2.39h11.138V8.986l-4.158-3.34h-1.006l-2.805-2.46H4.588v15.236zM8.274 5.646v11.745H5.62V4.219h5.113v1.427H8.274zm3.49 0h.918l-.917-.804v.804zM18.38 19.78H9.306V6.678h5.25v3.073h3.824v10.03zM15.59 8.72v-1.48l1.842 1.48h-1.842z" }));
}
export default PasteRegular;
