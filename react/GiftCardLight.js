import * as React from "react";
import Svg from "./StyledSvg";
function GiftCardLight({ size = 16, color = "currentColor" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement("path", { d: "M4.8 20.628h14.4c1.104 0 1.92-.816 1.92-1.92v-8.64c0-1.104-.816-1.92-1.92-1.92h-1.272c.576-.504.816-1.224.816-1.872 0-1.536-1.248-2.904-2.856-2.904-.528 0-1.056.144-1.464.408-.816.48-1.392 1.368-1.896 2.304L12 7.116l-.528-1.032c-.504-.936-1.08-1.824-1.896-2.304a2.717 2.717 0 00-1.44-.408c-1.632 0-2.856 1.368-2.856 2.904 0 .648.216 1.368.792 1.872H4.8c-1.104 0-1.92.816-1.92 1.92v8.64c0 1.104.816 1.92 1.92 1.92zm-.72-1.896v-5.064h15.84v5.064c0 .48-.264.744-.744.744H4.824c-.456 0-.744-.264-.744-.744zm0-6.984V10.02c0-.456.288-.744.744-.744h14.352c.48 0 .744.288.744.744v1.728H4.08zm1.68 5.88h3.6v-1.92h-3.6v1.92zm.6-11.352c0-.96.768-1.824 1.776-1.824 1.128 0 1.824 1.032 2.376 2.136l.84 1.608H9.504c-.816 0-1.728-.024-2.328-.408-.576-.336-.816-.96-.816-1.512zm6.288 1.92l.84-1.608c.576-1.104 1.248-2.136 2.4-2.136 1.008 0 1.776.864 1.776 1.824 0 .552-.24 1.176-.816 1.512-.624.384-1.512.408-2.352.408h-1.848z" }));
}
export default GiftCardLight;
