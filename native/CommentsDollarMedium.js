import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function CommentsDollarMedium({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M2.64 4.176v13.728l4.464-3.408H17.52V4.176c0-.984-.816-1.8-1.8-1.8H4.44c-.984 0-1.8.816-1.8 1.8zm1.92 9.936V4.224c0-.024.024-.048.048-.048h10.944c.024 0 .048.024.048.048v8.472H6.432L4.56 14.112zm3.192-4.92c-.024 1.056.792 1.896 1.944 2.064v.72h.84v-.72c1.104-.168 1.944-.912 1.944-1.824 0-.864-.6-1.416-1.68-1.56l-.96-.12c-.528-.072-.744-.216-.744-.576 0-.456.312-.624 1.032-.624.768 0 .984.168.96.816h1.248c0-.912-.768-1.704-1.8-1.872v-.72h-.84v.72c-1.056.168-1.776.888-1.776 1.776 0 .864.504 1.368 1.488 1.488l.984.12c.6.072.792.216.792.624 0 .504-.264.672-1.08.672-.912 0-1.128-.192-1.128-.984H7.752zm.168 7.224c0 .984.816 1.8 1.8 1.8h7.176l4.464 3.408V8.376c0-1.032-.864-1.92-1.92-1.92V17.832l-1.872-1.416H7.92z" }));
}
export default CommentsDollarMedium;
