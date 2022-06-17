import * as React from "react";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function NotificationsOnMedium({
  size = 16,
  color = "currentColor"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M11.28 2C7.474 2.387 4.5 5.805 4.5 9.964v6H2v2h20v-2h-2.5v-5.162a7.026 7.026 0 01-2 .144v5.018h-11v-6c0-3.039 2.017-5.394 4.5-5.9v-.1c0-.682.097-1.341.28-1.964zM15 21.963H9v-2h6v2z"  /><circle cx={18} cy={4} r={4}  /></Svg>;
}

export default NotificationsOnMedium;