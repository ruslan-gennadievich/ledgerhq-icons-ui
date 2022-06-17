import * as React from "react";
import Svg from "./StyledSvg";
function PlanetMedium({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M12 9.071A2.929 2.929 0 009.07 12h-1.9A4.829 4.829 0 0112 7.171v1.9z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.334 5.011a8.223 8.223 0 00-12.553 7.237c-.962.955-1.727 1.913-2.198 2.813-.5.956-.793 2.103-.223 3.088.014.025.03.049.046.072.478.757 1.315 1.096 2.147 1.216.873.127 1.915.044 3.031-.184.35-.072.713-.159 1.086-.261a8.223 8.223 0 0012.549-7.245c.276-.272.533-.543.77-.81.756-.853 1.348-1.715 1.675-2.534.312-.782.438-1.678.018-2.471a.958.958 0 00-.043-.083c-.57-.978-1.708-1.294-2.783-1.338-1.012-.041-2.22.142-3.522.5zM12 5.677a6.323 6.323 0 00-3.988 11.23c1.638-.53 3.5-1.359 5.402-2.457 1.903-1.099 3.552-2.298 4.83-3.45A6.322 6.322 0 0012 5.676zm6.152.867a8.214 8.214 0 011.652 2.858c.545-.653.907-1.23 1.096-1.703.22-.55.148-.8.095-.892l.002-.002c-.067-.114-.338-.36-1.218-.395a7.782 7.782 0 00-1.627.134zm-15.15 10.65h.003c.053.091.234.278.82.363.504.073 1.186.048 2.025-.098a8.215 8.215 0 01-1.654-2.862c-.407.487-.718.94-.929 1.344-.406.778-.33 1.135-.264 1.254zM12 18.324a6.326 6.326 0 006.125-4.748 32.815 32.815 0 01-3.76 2.52 32.815 32.815 0 01-4.063 1.997c.54.15 1.11.23 1.698.23z" }));
}
export default PlanetMedium;
