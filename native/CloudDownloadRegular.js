import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CloudDownloadRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M17.988 15.876v1.488c2.448-.312 4.224-2.28 4.224-4.704 0-2.352-1.704-4.2-3.912-4.608-.408-2.808-2.928-4.848-5.784-4.848-2.112 0-4.056 1.104-5.064 2.904-3 .048-5.664 2.448-5.664 5.64 0 2.496 1.632 4.632 4.032 5.4V15.54c-1.464-.624-2.472-2.064-2.472-3.792 0-2.712 2.568-4.68 5.136-4.032.504-1.872 2.16-3.048 4.032-3.048 2.496 0 4.632 2.088 4.248 4.8 2.064-.288 3.888 1.104 3.888 3.192 0 1.608-1.104 2.928-2.664 3.216zm-10.368.576l4.368 4.344 4.344-4.344-.984-.96L14.1 16.74c-.456.456-.912.936-1.368 1.416v-6.72h-1.488v6.744c-.456-.48-.912-.984-1.368-1.44l-1.272-1.248-.984.96z" }));
}
export default CloudDownloadRegular;
