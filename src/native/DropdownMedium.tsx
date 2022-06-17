import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function DropdownMedium({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 16l5.712-5.736-1.344-1.344L12 13.264 7.632 8.92l-1.344 1.344L12 16z"  /></Svg>;
}

export default DropdownMedium;