import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function FullnodeSyncRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M10.716 20.664c.288 0 .528-.024.816-.024l-1.56-1.56-.864-.072c-2.88-.192-4.536-1.008-4.536-2.016v-1.608c1.272.912 3.504 1.416 6.144 1.416.336 0 .648-.024.96-.024l1.416-1.392 1.056 1.008c2.232-.456 3.816-1.416 4.176-2.712l.096-.096v-7.92c0-2.304-3.288-3.624-7.704-3.624-4.272 0-7.704 1.32-7.704 3.624v11.328c0 2.328 3.36 3.768 7.704 3.672zm-6.144-7.44v-1.608c1.272.912 3.504 1.416 6.144 1.416 2.616 0 4.848-.504 6.144-1.416v1.608c0 1.68-3.912 2.184-6.144 2.184-3.888 0-6.144-.96-6.144-2.184zm0-3.768V7.848c1.272.912 3.504 1.416 6.144 1.416 2.592 0 4.848-.504 6.144-1.416v1.608c0 1.224-2.328 2.208-6.144 2.208-3.888 0-6.144-.984-6.144-2.208zm0-3.792c0-1.152 2.28-2.064 6.144-2.064 3.984 0 6.144.912 6.144 2.064 0 1.272-2.328 2.208-6.144 2.208-3.888 0-6.144-.936-6.144-2.208zm7.512 12.984l3.288 3.312 5.616-5.64-1.104-1.08-4.512 4.488-2.208-2.184-1.08 1.104z" }));
}
export default FullnodeSyncRegular;
