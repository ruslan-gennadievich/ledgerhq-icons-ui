import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function LockAltUltraLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M11.58 17.436h.84v-4.08h-.84v4.08zm-6.768 3.84h14.376V9.684h-2.064V7.836c0-2.808-2.328-5.112-5.136-5.112-2.808 0-5.112 2.304-5.112 5.112v1.848H4.812v11.592zm.84-.816V10.5h12.696v9.96H5.652zM7.716 9.684V7.836c0-2.352 1.92-4.296 4.272-4.296 2.352 0 4.296 1.944 4.296 4.296v1.848H7.716z"  /></Svg>;
}

export default LockAltUltraLight;