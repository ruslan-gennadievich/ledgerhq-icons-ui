import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function DropupMedium({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M12 8l5.712 5.736-1.344 1.344L12 10.736 7.632 15.08l-1.344-1.344L12 8z"  /></Svg>;
}

export default DropupMedium;