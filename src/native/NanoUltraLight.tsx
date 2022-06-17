import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function NanoUltraLight({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M18.048 22.32l4.272-4.272L5.952 1.68 1.68 5.952 18.048 22.32zM2.784 5.952l3.168-3.168 7.272 7.248a2.915 2.915 0 00-2.376.816 2.866 2.866 0 00-.816 2.352L2.784 5.952zm8.592 8.568c-.84-.84-.84-2.256.024-3.144.888-.84 2.28-.84 3.12 0l6.696 6.672-3.168 3.168-6.672-6.696zm.336-1.488c0 .696.6 1.296 1.32 1.296.696 0 1.296-.6 1.296-1.296 0-.72-.6-1.32-1.296-1.32-.72 0-1.32.6-1.32 1.32zm.6 0c0-.408.312-.72.72-.72.384 0 .72.312.72.72 0 .384-.336.72-.72.72a.722.722 0 01-.72-.72z"  /></Svg>;
}

export default NanoUltraLight;