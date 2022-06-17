import * as React from "react";
import Svg from "./StyledSvg";
function NanoSFoldedRegular({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M1.98 21.252h16.032c2.184 0 4.008-1.824 4.008-4.032 0-1.056-.432-2.04-1.152-2.784l-5.064-5.088.552-.576-1.728-1.728-.576.576-1.92-1.944.576-.576-1.728-1.728-.576.576-1.2-1.2-5.568 5.544 4.968 4.944H1.98v8.016zm1.464-1.464V14.7h14.568a2.52 2.52 0 012.52 2.52c0 1.416-1.128 2.568-2.52 2.568H3.444zm2.28-11.496l3.48-3.48 8.4 8.448c-.24-.024-.504-.024-.768-.024h-6.144L5.724 8.292zm10.752 8.928c0 .744.624 1.416 1.416 1.416.768 0 1.368-.672 1.368-1.416 0-.768-.6-1.368-1.368-1.368-.792 0-1.416.6-1.416 1.368z" }));
}
export default NanoSFoldedRegular;
