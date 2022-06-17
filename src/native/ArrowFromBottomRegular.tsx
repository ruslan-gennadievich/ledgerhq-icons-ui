import * as React from "react";
import  { Path } from "react-native-svg";
import Svg from "./StyledSvg";
type Props = {
  size?: number | string;
  color?: string;
};

function ArrowFromBottomRegular({
  size = 16,
  color = "neutral.c100"
}: Props): JSX.Element {
  return <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}><Path d="M11.256 5.58v11.28h1.488V5.556c.504.552 1.056 1.104 1.56 1.632l2.232 2.208.96-.96L12 2.94 6.504 8.436l.984.96 2.208-2.208a33.046 33.046 0 001.56-1.608zM3.6 21.06h16.8V19.5H3.6v1.56z"  /></Svg>;
}

export default ArrowFromBottomRegular;