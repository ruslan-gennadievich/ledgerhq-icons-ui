import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function CircledUpThin({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M11.76 7.632v9.408h.48V7.632l2.064 2.064 1.704 1.704.336-.336L12 6.72l-4.344 4.344.336.336 1.704-1.704 2.064-2.064zM3.12 12c0 4.968 3.912 8.88 8.88 8.88 4.968 0 8.88-4.032 8.88-8.88 0-4.968-3.912-8.88-8.88-8.88-4.968 0-8.88 3.912-8.88 8.88zm.48 0c0-4.704 3.696-8.4 8.4-8.4 4.704 0 8.4 3.696 8.4 8.4 0 4.584-3.696 8.4-8.4 8.4-4.704 0-8.4-3.696-8.4-8.4z"  /></Svg>;
}

export default CircledUpThin;