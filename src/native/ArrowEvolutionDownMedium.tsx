import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function ArrowEvolutionDownMedium({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M16.004 14.607L7.397 6 5.983 7.414l8.606 8.607H7.004v2h11v-11h-2v7.586z"  /></Svg>;
}

export default ArrowEvolutionDownMedium;