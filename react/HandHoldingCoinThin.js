import * as React from "react";
import Svg from "./StyledSvg";
function HandHoldingCoinThin({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M7.872 19.531c1.248.72 2.808.672 4.416-.096l8.544-4.056c.432-.192.792-.696.792-1.32 0-.744-.648-1.32-1.32-1.32-.36 0-.504.072-1.488.528l-.12-.24a1.51 1.51 0 00-1.968-.744L13.68 13.58c.12.072.24.216.312.408l2.928-1.272c.504-.216 1.104-.024 1.344.504l.096.24-5.808 2.64c.552-.816.216-1.848-.6-2.208l-3.408-1.56c-2.304-1.056-4.368-.768-6.168 1.128v4.896h.48v-4.704c1.608-1.608 3.408-1.848 5.496-.888l3.408 1.56c.336.144.576.528.576.912 0 .696-.768 1.2-1.392.912l-3.528-1.632-.192.432 3.384 1.584c.744.336 1.44.312 2.616-.216l6.672-3.024c.576-.264 1.248.144 1.248.768 0 .384-.192.744-.504.888l-8.568 4.056c-1.488.696-2.856.744-3.96.12L5.928 17.9l-.24.408 2.184 1.224zM9.696 6.475a2.52 2.52 0 105.04.001 2.52 2.52 0 00-5.04 0zm.48 0c0-1.128.912-2.04 2.04-2.04 1.128 0 2.04.912 2.04 2.04 0 1.128-.912 2.04-2.04 2.04a2.038 2.038 0 01-2.04-2.04z" }));
}
export default HandHoldingCoinThin;
