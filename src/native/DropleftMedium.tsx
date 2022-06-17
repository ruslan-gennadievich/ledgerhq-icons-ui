import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function DropleftMedium({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M8 12l5.736 5.712 1.344-1.344L10.736 12l4.344-4.368-1.344-1.344L8 12z"  /></Svg>;
}

export default DropleftMedium;