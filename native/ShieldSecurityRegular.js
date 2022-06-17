import * as React from "react";
import { Path } from "react-native-svg";
import Svg from "./StyledSvg";
function ShieldSecurityRegular({ size = 16, color = "neutral.c100" }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24", fill: color },
        React.createElement(Path, { d: "M12 21.84c6.24-2.472 9.36-6.408 9.36-11.712v-5.04C18.696 3.168 15.456 2.16 12 2.16c-3.456 0-6.696 1.008-9.36 2.928v5.04c0 5.304 3.12 9.24 9.36 11.712zM4.2 10.128V5.832C6.504 4.344 9.072 3.624 12 3.624s5.496.72 7.8 2.208v4.296c0 4.656-2.4 7.824-7.8 10.104-5.4-2.28-7.8-5.448-7.8-10.104zm3.12.936c0 .12.024.216.096.312l2.112 3.432a2.965 2.965 0 002.592 1.488c1.632 0 2.928-1.248 3.024-2.88l.12-5.592a.512.512 0 00-.504-.528.507.507 0 00-.504.504l-.072 3h-.528l.024-4.008c0-.288-.192-.528-.504-.528a.507.507 0 00-.504.504l-.024 3.792h-.528l-.024-4.296a.492.492 0 00-.504-.504.512.512 0 00-.504.528l.024 4.512h-.552l-.048-3.504c0-.264-.192-.528-.504-.528s-.504.264-.504.552l.072 5.208-1.104-1.8a.596.596 0 00-.528-.312c-.36 0-.624.264-.624.648z" }));
}
export default ShieldSecurityRegular;
