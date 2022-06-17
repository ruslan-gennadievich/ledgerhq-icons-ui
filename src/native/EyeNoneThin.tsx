import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function EyeNoneThin({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M21.192 21.528l.336-.336-18.72-18.72-.336.336 4.2 4.2c-1.68 1.248-3.096 3-4.032 4.992 1.848 3.984 5.736 6.984 9.36 6.984 1.656 0 3.384-.648 4.944-1.704l4.248 4.248zM3.168 12a12.809 12.809 0 013.84-4.656L9.624 9.96A3.222 3.222 0 008.88 12 3.114 3.114 0 0012 15.12c.768 0 1.488-.264 2.04-.744l2.544 2.544c-1.488 1.008-3.048 1.584-4.584 1.584-3.408 0-7.008-2.736-8.832-6.504zm6.192 0c0-.648.216-1.248.6-1.704l3.744 3.744c-.48.384-1.08.6-1.704.6A2.632 2.632 0 019.36 12zm.096-6.528l.384.384c.72-.24 1.44-.36 2.16-.36 3.408 0 7.008 2.736 8.832 6.504a13.35 13.35 0 01-1.944 2.904l.336.336A13.303 13.303 0 0021.36 12C19.512 8.016 15.624 5.016 12 5.016c-.84 0-1.704.168-2.544.456z"  /></Svg>;
}

export default EyeNoneThin;