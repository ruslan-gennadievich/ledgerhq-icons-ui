import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function ShieldSecurityThin({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 21.84c6.24-2.472 9.36-6.408 9.36-11.712v-5.04C18.696 3.168 15.456 2.16 12 2.16c-3.456 0-6.696 1.008-9.36 2.928v5.04c0 5.304 3.12 9.24 9.36 11.712zM3.12 10.128v-4.8C5.688 3.552 8.712 2.64 12 2.64c3.288 0 6.312.912 8.88 2.688v4.8c0 5.088-2.88 8.76-8.88 11.184-6-2.424-8.88-6.096-8.88-11.184zm4.2.936c0 .12.024.216.096.312l2.112 3.432a2.993 2.993 0 002.592 1.464c1.632 0 2.928-1.224 3.024-2.856l.12-5.592a.512.512 0 00-.504-.528.507.507 0 00-.504.504l-.072 3h-.528l.024-3.984c0-.288-.192-.528-.504-.528a.507.507 0 00-.504.504l-.024 3.768h-.528l-.024-4.272a.492.492 0 00-.504-.504.512.512 0 00-.504.528l.024 4.488h-.552l-.048-3.504a.492.492 0 00-.504-.504c-.312 0-.504.24-.504.528l.072 5.208-1.104-1.8a.596.596 0 00-.528-.312c-.36 0-.624.264-.624.648z"  /></Svg>;
}

export default ShieldSecurityThin;